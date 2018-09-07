import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
private _language: string;

  constructor() {
    this._language = 'es';
   }

   getLanguage(): string {
     return this._language;
   }

   setLanguage(lang: string){
     this._language = lang;
   }
}
