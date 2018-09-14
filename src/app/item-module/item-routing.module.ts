import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ItemResolver } from '../services/item-resolver.service';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

const itemsRoutes: Routes = [
    {
        path: '',
        component: ItemListComponent
    },
  { path: ':id', 
    component: ItemDetailsComponent,
    resolve: {
      item: ItemResolver
    } 
  }
];

 
@NgModule({
  imports: [ RouterModule.forChild(itemsRoutes),  TranslateModule ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule {}

export const itemRoutedComponents = [
    ItemDetailsComponent,
    ItemListComponent
];