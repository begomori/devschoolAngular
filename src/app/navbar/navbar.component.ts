import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  template: `
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <a class="navbar-brand" href="#">DevShop</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item" *ngFor="let link of links">
              <a class="nav-link" href="#">{{ link }}</a>
            </li>
            <li class="nav-item">
              <select [(ngModel)]="selectedLanguage" (change)="onChange()">
              <option *ngFor="let idioma of idiomas" [ngValue]="idioma.key">{{idioma.value}}</option>
            </select>
            </li>
          </ul>
        </div>
      </nav>
  `
})
export class NavbarComponent {

  links: string[];
  idiomas: any;
  selectedLanguage: string;

  constructor() {
    this.links = ['Home', 'Favourites', 'Profile'];
    this.idiomas = [
      { key: 'es', value: 'Español' },
      { key: 'en', value: 'English' },
      { key: 'va', value: 'Valencià' },
    ]
  }

  // al cambiar el selector, enviar el idioma a los demás componentes...
  @Output() onChangeLanguage = new EventEmitter<string>();

  onChange() {
    this.onChangeLanguage.emit(this.selectedLanguage);
  }

}
