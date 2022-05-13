import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from './typings';

const MOCKED_ITEMS = [
  {name: 'first', value: 'some first value'},
  {name: 'second', value: 'some second value'},
  {name: 'third', value: 'some third value'},
  {name: 'fourth', value: 'some fourth value'},
  {name: 'fifth', value: 'some fifth value'},
  {name: 'sixth', value: 'some sixth value'},
];

// Just for testing purposes. Use separate specific services in real cases
@Injectable({ providedIn: 'root' })
export class DataService {
  fetchItems(): Observable<Item[]> {
    return of(MOCKED_ITEMS).pipe(
      delay(2000)
    );
  }
}
