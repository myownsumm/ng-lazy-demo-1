import { createReducer, on } from '@ngrx/store';
import { Item } from '../../typings';
import { initialDataFetched } from './actions';

export interface TableNgrxState {
  items: Item[];
}

const tableNgrxInitialState: TableNgrxState = {
  items: []
};

export const tableNgrxReducer = createReducer(
  tableNgrxInitialState,
  on(initialDataFetched, (state, {items}) => ({...state, items})),
);
