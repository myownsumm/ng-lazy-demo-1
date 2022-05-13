import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { fetchInitialData } from '../../state/actions';
import { AppState, selectNgrxTableItems } from '../../state/selectors';

@Component({
  selector: 'app-view-data-ngrx',
  templateUrl: './view-data-ngrx.component.html',
})
export class ViewDataNgrxComponent implements OnInit {
  public items$: Observable<object[]> = of([]);

  constructor(private readonly store: Store<AppState>) {
  }

  ngOnInit() {
    this.items$ = this.store.select(selectNgrxTableItems);

    this.store.dispatch(fetchInitialData());
  }
}
