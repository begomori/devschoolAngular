import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Item } from '../interface/item';
import { FilterItemsPipe } from '../filter-pipe/filter-pipe';

@Component({
  selector: 'dev-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  items: Item[];
  filterAvailable: boolean;

  @Input() language: string;
  @Output() selectedItem: EventEmitter<Item>;

  constructor() {

    this.selectedItem = new EventEmitter();
    this.items = [
      {
        id: 1,
        name: 'Dragon Quest XI (PS4)',
        description: 'El juego JRPG definitivo que todos esperábamos',
        price: 65.95,
        currency: 'EUR',
        available: true,
        img: 'https://cdn.shopify.com/s/files/1/0358/4693/products/DRAGON_QUEST_grande.jpg'
      },
      {
        id: 2,
        name: 'Zelda Ocarina of Time (n64)',
        description: 'El mejor videojuego de la historia en su plataforma original.',
        price: 99.99,
        currency: 'USD',
        available: false,
        img: 'https://i.ebayimg.com/04/!!e!T)qQBWM~$(KGrHqQOKjQE0jn!4Z2qBNP2R6dCK!~~_35.JPG?set_id=89040003C1'
      },
      {
        id: 3,
        name: 'Nendoroid Lina Inverse',
        description: 'Figura con muchas partes intercambiables, la protagonista de Slayers',
        price: 30.45,
        currency: 'GBP',
        available: true,
        img: 'https://www.zaitama.com/wp-content/uploads/Slayers-Nendoroid-Lina-Inverse-5.jpg'
      },
    ];
  }
  
  itemSelected(item: Item) {
    this.selectedItem.emit(item);
  }

}
