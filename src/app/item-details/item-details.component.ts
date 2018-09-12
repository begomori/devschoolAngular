import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interface/item';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'dev-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit{
  //@Input() item: Item; // hay que quitar los inputs y outputs
  //@Input() language: string;
  
  item:Item;

  constructor(private cartService: CartService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
   }

   
  ngOnInit() {
    this.item = this.route.snapshot.data.item;
  }


   addToCart() {
    this.cartService.addItem(this.item);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

}
