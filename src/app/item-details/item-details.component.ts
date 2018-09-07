import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interface/item';

@Component({
  selector: 'dev-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {
  @Input() item: Item;
  @Input() language: string;
 
  constructor() {
   }

}
