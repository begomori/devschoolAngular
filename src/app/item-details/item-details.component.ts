import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interface/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'dev-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit{
  @Input() item: Item;
 // @Input() language: string;
 
  constructor(private cartService: CartService) {
   }

   addToCart() {
    this.cartService.addItem(this.item);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

  itemIsInCart(): boolean {
    return this.cartService.isItemPresent(this.item.id);
  }

  ngOnInit() {
  }

}
