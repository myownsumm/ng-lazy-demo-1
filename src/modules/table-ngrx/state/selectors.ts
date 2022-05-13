import { createSelector } from '@ngrx/store';
import { TableNgrxState } from './reducer';

export interface AppState {
  tableNgrx: TableNgrxState;
}

export const selectFeature = (state: AppState) => state.tableNgrx;

export const selectNgrxTableItems = createSelector(
  selectFeature,
  (state: TableNgrxState) => state.items
);
