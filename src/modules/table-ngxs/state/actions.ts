import { Item } from '../../typings';

export class FetchItemsAction {
  static readonly type = '[Table NGXS] FetchItemsAction';
}

export class ItemsFetchedAction {
  static readonly type = '[Table NGXS] ItemsFetchedAction';

  constructor(public payload: { items: Item[] }) {
  }
}
