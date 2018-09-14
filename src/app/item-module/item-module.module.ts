import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemRoutedComponents, ItemsRoutingModule } from '../item-module/item-routing.module';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { SharedModule } from '../shared/shared.module';
import { TooltipModule } from '../../../node_modules/ngx-bootstrap/tooltip';
import { PopoverModule } from '../../../node_modules/ngx-bootstrap/popover';
import { ModalModule } from '../../../node_modules/ngx-bootstrap/modal';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [ItemListComponent, ItemDetailsComponent
  ],
  exports: [ItemListComponent, ItemDetailsComponent]
})
export class ItemModuleModule { }
