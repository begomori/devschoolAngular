import { Injectable, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(): boolean {
        const isLoggedIn = this.loginService.isLoggedIn();
        if (isLoggedIn){
            return true;
        }

        this.router.navigate(['/login']); // te lleva a login en cualquier componente si no estas logueado
        return false;
    }

}