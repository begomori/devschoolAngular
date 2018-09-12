import { Injectable, Inject } from '@angular/core';
import { Item } from '../interface/item';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/items');
  }

  getItem(id:number): Observable<Item> {
    return this.http.get<Item>('http://localhost:3000/items/' + id);
  }

}
