import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { mergeMap } from 'rxjs/operators';
import { DataService } from '../../data.service';
import { Item } from '../../typings';
import { FetchItemsAction, ItemsFetchedAction } from './actions';

export interface NgxsStore {
  items: Item[];
}

@State<NgxsStore>({
  name: 'ngxsState',
  defaults: {
    items: []
  }
})
@Injectable()
export class NgxsState {
  constructor(private readonly dataService: DataService) {
  }

  @Action(FetchItemsAction)
  fetchItems(ctx: StateContext<NgxsStore>, action: FetchItemsAction) {
    // hm... no place for side effects in NGXS?
    return this.dataService.fetchItems().pipe(
      mergeMap(items => ctx.dispatch(new ItemsFetchedAction({items})))
    );
  }

  @Action(ItemsFetchedAction)
  itemsFetched(ctx: StateContext<NgxsStore>, action: ItemsFetchedAction) {
    return ctx.patchState({items: action.payload.items});
  }

  @Selector()
  static items(state: NgxsStore) {
    return state.items;
  }
}
