import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { ItemResolver } from './services/item-resolver.service';
import { PerfilComponent } from './perfil/perfil.component';
import { ItemModuleModule } from './item-module/item-module.module';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  {
    path: 'list',
    loadChildren: "./item-module/item-module.module#ItemModuleModule",
    canActivate: [AuthGuard]
  },
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: '**', component: WelcomeComponent }
];

 
@NgModule({
  imports: [ 
      RouterModule.forRoot(appRoutes),
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}