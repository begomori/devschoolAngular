import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../interface/item';
import { Cart } from '../interface/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Cart[];
  private _items$: BehaviorSubject<Cart[]>;

  constructor() {
    this.items = [];
    this._items$ = new BehaviorSubject(this.items);
  }

  getItems(): Observable<Cart[]> {
    return this._items$.asObservable();
  }

  addItem(item: Item, quantity: number = 1) {
    this.items.push({ ...item, quantity });
    this._items$.next(this.items);
  }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
    this._items$.next(this.items);
  }

  plus(id: number) {
    const index = this.items.findIndex((item: Cart) => item.id === id);
    this.items[index].quantity++;
    this._items$.next(this.items);
  }

  minus(id: number) {
    const index = this.items.findIndex((item: Cart) => item.id === id);
    const quantity = this.items[index];
    if (quantity) {
      this.items[index].quantity--;
      this._items$.next(this.items);
    }
  }

  isItemPresent(id: number): boolean {
    return this.items.some(item => item.id === id);
  }
}