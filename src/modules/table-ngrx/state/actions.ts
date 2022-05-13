import { createAction, props } from '@ngrx/store';

export const fetchInitialData = createAction('[Table NGRX] Fetch initial Data');
export const initialDataFetched = createAction('[Table NGRX] Initial Data fetched', props<{ items: object[] }>());
