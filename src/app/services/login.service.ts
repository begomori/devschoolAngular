import { Injectable, Inject } from '@angular/core';
import { User } from '../interface/user';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private logged: boolean;
  
  constructor() {
    
    this.logged = false;
  }

login(pass: string): Observable<boolean> {
  this.logged = pass === 'test'; // es true si es igual a esta password
  return of(this.logged).pipe(delay(1000));
}

isLoggedIn() {
  return this.logged;
}

}