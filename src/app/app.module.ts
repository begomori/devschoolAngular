import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TranslatePipe } from './translate/translate-pipe';
import { FilterItemsPipe } from './filter-pipe/filter-pipe';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from './item-resolver.service';
import { ItemsService } from './services/items.service';
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: CartComponent},
  { path: 'items/:id', component: ItemDetailsComponent,
    resolve: {
      item: ItemResolver
    } 
  },
  {
    path: 'list',
    component: ItemListComponent,
    data: { title: 'Item List' }
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ItemListComponent,
    ItemDetailsComponent,
    TranslatePipe,
    FilterItemsPipe,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes),
  ],
  providers: [
    ItemsService,
    ItemResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
