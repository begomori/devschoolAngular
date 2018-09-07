import { Component } from '@angular/core';
import { Item } from './interface/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'devschool';
    language: string;
    item: Item;
    selectedLink: string;

  selectedItem(item: Item) {
    this.selectedLink = 'item';
    this.item = item;
  }
}
