import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngxs/store';
import { Subscription, tap } from 'rxjs';
import { Item } from '../../../typings';
import { FetchItemsAction } from '../../state/actions';
import { NgxsState } from '../../state/state';

@Component({
  selector: 'app-view-data-ngxs',
  templateUrl: './view-data-ngxs.component.html',
})
export class ViewDataNgxsComponent implements OnInit, OnDestroy {
  public displayedColumns = ['name', 'value'];
  public dataSource: MatTableDataSource<Item> = new MatTableDataSource();

  private sub$: Subscription = new Subscription();

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchItemsAction());
    this.listenToItems();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  listenToItems(): void {
    this.sub$ = this.store.select(NgxsState.items)
      .pipe(
        tap(items => this.dataSource.data = items)
      )
      .subscribe();
  }
}
