import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FilterItemsPipe } from './filter-pipe/filter-pipe';
import { CartComponent } from './cart/cart.component';
import { ItemResolver } from './services/item-resolver.service';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule }     from './app-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ItemListComponent,
    ItemDetailsComponent,
    FilterItemsPipe,
    CartComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      TooltipModule.forRoot(),
      PopoverModule.forRoot(),
      ModalModule.forRoot(),
      AppRoutingModule
  ],
  providers: [
    ItemResolver,
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
