import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../interface/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'dev-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  items$: Observable<Cart[]>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.getItems();
  }

  ngOnInit() {
  }

  getTotalAmount(items: Cart[]): number {
    return items.reduce((acc: number, item: Cart) => {
      return acc + item.quantity * item.price;
    }, 0);
  }

  remove(id: number) {
    this.cartService.removeItem(id);
  }

  downQuantity(id: number) {
    this.cartService.minus(id);
  }

  upQuantity(id: number) {
    this.cartService.plus(id);
  }

}
