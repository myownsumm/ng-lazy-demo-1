import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from './typings';
import data from './data.json';

// Just for testing purposes. Use separate specific services in real cases
@Injectable({providedIn: 'root'})
export class DataService {
  fetchItems(): Observable<Item[]> {
    return of(data).pipe(
      delay(2000)
    );
  }
}
