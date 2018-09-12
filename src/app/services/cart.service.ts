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

  //vamos a devolver el array de items en el Observable
  // en vez de trabajar con el array de Items normales vamos a trabajar con el observable
  getItems(): Observable<Cart[]> {
      return this._items$.asObservable();
  }

  addItem(item: Item) {
    //busco si el item ya está añadido en el carrito
    if(this.items.find(itemArray => itemArray.id == item.id)){
        // Si ya existe en la lista de items del carrito, lo que tengo que hacer es incrementar el contador
        this.aumentar(item.id);
    }else{
        const copyItem= <Cart> item;
        copyItem.quantity = 1;
        this.items.push(copyItem);
        this._items$.next(this.items); // observable
    }
  }
 
  //le paso el id del item que quiero borrar
  removeItem(_id: number) {
    this.items = this.items.filter(i => i.id !== _id); // con el filtro  ya estoy eliminando el item
    this._items$.next(this.items); 
  }

  // aumentar contador carro
  aumentar(id: number) {
    const index = this.items.findIndex((item: Cart) => item.id === id);
    this.items[index].quantity++;
    this._items$.next(this.items);  //observable

  }

  // disminuir contador carro
  disminuir(id: number) {
    const index = this.items.findIndex((item: Cart) => item.id === id);
    const quantity = this.items[index];
    if (quantity) {
      this.items[index].quantity--;
      this._items$.next(this.items);  //observable
    }
  }
}