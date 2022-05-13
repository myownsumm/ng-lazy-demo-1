import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, switchMap } from 'rxjs/operators';
import { DataService } from '../../data.service';
import { fetchInitialData, initialDataFetched } from './actions';

@Injectable()
export class TableNgrxEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataService: DataService
  ) {
  }

  loadItems$ = createEffect(() => this.actions$.pipe(
      ofType(fetchInitialData.type),
      switchMap(() => this.dataService.fetchItems().pipe(
        map(
          (items) => initialDataFetched({items})
        )
      ))
    )
  );
}
