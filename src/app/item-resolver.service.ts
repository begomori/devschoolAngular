import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from './interface/item';
import { ItemsService } from './services/items.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item>{

  constructor(private ItemService: ItemsService) { 
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    return this.ItemService.getItem(+route.params.id);
  }
}
