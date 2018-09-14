import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterItemsPipe } from '../filter-pipe/filter-pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterItemsPipe
  ],
  exports: [ FilterItemsPipe]
})
export class SharedModule { }
