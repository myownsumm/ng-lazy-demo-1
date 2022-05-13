import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { fetchInitialData, initialDataFetched } from './actions';

const MOCKED_ITEMS = [
  {name: 'first', value: 'some first value'},
  {name: 'second', value: 'some second value'},
  {name: 'third', value: 'some third value'},
  {name: 'fourth', value: 'some fourth value'},
  {name: 'fifth', value: 'some fifth value'},
  {name: 'sixth', value: 'some sixth value'},
];

@Injectable()
export class TableNgrxEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  loadItems$ = createEffect(() => this.actions$.pipe(
      ofType(fetchInitialData.type),
      delay(2000), // 2 seconds mocked delay
      map(
        () => initialDataFetched({items: MOCKED_ITEMS})
      )
    )
  );
}
