import { createReducer, on } from '@ngrx/store';
import { initialDataFetched } from './actions';

export interface TableNgrxState {
  items: object[];
}

const tableNgrxInitialState: TableNgrxState = {
  items: []
};

export const tableNgrxReducer = createReducer(
  tableNgrxInitialState,
  on(initialDataFetched, (state, {items}) => ({...state, items})),
);
