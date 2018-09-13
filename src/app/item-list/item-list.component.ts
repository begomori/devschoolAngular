import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../interface/item';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  
  items$: Observable<Item[]>;
  filterAvailable: boolean;
  filterActive: boolean;

  constructor(private itemsService: ItemsService, private router: Router) {
    this.items$ = this.itemsService.getItemList();
  }
  
  ngOnInit() {
  }

  itemSelected(item: Item) {
    this.router.navigate(['/items/'+ item.id]);
  }

}
