import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from '../item-module/item-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItemListComponent } from '../../item-list/item-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '../../../../node_modules/@ngx-translate/core';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule,
    PopoverModule
  ],
  declarations: [ItemListComponent, ItemDetailsComponent
  ],
  exports: [ItemListComponent, ItemDetailsComponent]
})
export class ItemModuleModule { }
