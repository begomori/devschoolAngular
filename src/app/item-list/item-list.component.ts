import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Item } from '../interface/item';

@Component({
  selector: 'dev-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  items: Item[];

  @Output() selectedItem: EventEmitter<Item>;
  @Input() language: string;

  constructor() {
    this.selectedItem = new EventEmitter(); //lo mandaré al componente item-details
    this.items = [
      {
        id: 1,
        name: 'Dragon Quest XI (PS4)',
        price: 65.95,
        currency: 'EUR',
        available: true,
        img: 'https://cdn.shopify.com/s/files/1/0358/4693/products/DRAGON_QUEST_grande.jpg'
      },
      {
        id: 2,
        name: 'Zelda Ocarina of Time (n64)',
        price: 99.99,
        currency: 'USD',
        available: false,
        img: 'https://i.ebayimg.com/04/!!e!T)qQBWM~$(KGrHqQOKjQE0jn!4Z2qBNP2R6dCK!~~_35.JPG?set_id=89040003C1'
      },
      {
        id: 3,
        name: 'Nendoroid Lina Inverse',
        price: 30.45,
        currency: 'GBP',
        available: true,
        img: 'http://images.goodsmile.info/cgm/images/product/20180316/7124/50784/large/fda1947a429085c2095b5ef4468cb237.jpg'
      },
    ];
  }




  onSelect(item: Item) {
    this.selectedItem.emit(item);
  }

}
