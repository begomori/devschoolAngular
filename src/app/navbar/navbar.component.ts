import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  links: string[];
  idiomas: any;
  selectedLanguage: string;

  constructor() {
    this.links = ['welcome', 'list'];
    
    this.idiomas = [
      { key: 'es', value: 'Español' },
      { key: 'en', value: 'English' },
      { key: 'va', value: 'Valencià' },
    ]
  }

  // al cambiar el selector, enviar el idioma a los demás componentes...
  @Output() languageSelected = new EventEmitter<string>();

  onChange() {
    this.languageSelected.emit(this.selectedLanguage);
  }

}
