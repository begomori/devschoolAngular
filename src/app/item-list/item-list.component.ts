import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Item } from '../interface/item';
import { FilterItemsPipe } from '../filter-pipe/filter-pipe';
import { LanguageService } from '../services/language.service';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dev-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  
  items$: Observable<Item[]>;
  filterAvailable: boolean;

  //@Input() language: string;
  @Output() selectedItem: EventEmitter<Item>;

  constructor(private itemsService: ItemsService) {
    this.selectedItem = new EventEmitter();
    this.items$ = this.itemsService.getItemList();
  }
  
  ngOnInit() {
  }

  itemSelected(item: Item) {
    this.selectedItem.emit(item);
  }

}
