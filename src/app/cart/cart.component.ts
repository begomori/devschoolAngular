import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../interface/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'dev-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  
  items: Cart[];
  items$: Observable<Cart[]>; //observable

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.getItems();
  }

  ngOnInit() {
  }


  remove(id: number) {
    this.cartService.removeItem(id);
    //this.items$ = this.cartService.getItems(); // no se si hará falta para refrescar los items actuales después de borrar si ahora usamos obersvables..
  }

  minus(id: number) {
    this.cartService.disminuir(id);
  }

  moar(id: number) {
    this.cartService.aumentar(id);
  }

  // metodo para sumar el total del carrito de la compra
  getTotalAmount(items: Cart[]) : number {
    // método reduce de javascript nos devuelve la suma de numeros (price) del array
      return items.reduce((total: number, item: Cart) => {
        return total + item.quantity * item.price;
      }, 0);
  }
}
