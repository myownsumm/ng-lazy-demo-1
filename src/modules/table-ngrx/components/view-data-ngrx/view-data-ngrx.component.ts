import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { Item } from '../../../typings';
import { fetchInitialData } from '../../state/actions';
import { AppState, selectNgrxTableItems } from '../../state/selectors';

@Component({
  selector: 'app-view-data-ngrx',
  templateUrl: './view-data-ngrx.component.html',
})
export class ViewDataNgrxComponent implements OnInit, OnDestroy {
  public displayedColumns = ['name', 'value'];
  public dataSource: MatTableDataSource<Item> = new MatTableDataSource();

  private sub$: Subscription = new Subscription();

  constructor(private readonly store: Store<AppState>) {
  }

  ngOnInit() {
    this.listenToItems();
    this.store.dispatch(fetchInitialData());
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  listenToItems(): void {
    this.sub$ = this.store.select(selectNgrxTableItems)
      .pipe(
        tap(items => {
          this.dataSource.data = items;
        })
      ).subscribe();
  }
}
