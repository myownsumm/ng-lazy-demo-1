import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { fetchInitialData, initialDataFetched } from './actions';

@Injectable()
export class TableNgrxEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  loadItems$ = createEffect(() => this.actions$.pipe(
      ofType(fetchInitialData.type),
      map(
        () => initialDataFetched({items: [{prop: 'value'}]})
      )
    )
  );

}
