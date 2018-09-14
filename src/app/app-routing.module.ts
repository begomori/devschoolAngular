import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  {
    path: 'list',
    loadChildren: "./items/item-module/item-module.module#ItemModuleModule",
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