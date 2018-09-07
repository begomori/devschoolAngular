import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  links: string[];
  idiomas: any;
  selectedLanguage: string; //selecciono idioma de la lista

  // al cambiar el selector, enviar el idioma a los demás componentes
  @Output() languageSelected = new EventEmitter<string>();
  
  // pincho link para esconder un componente u otro!
  @Output() selectedChange: EventEmitter<string>; // envio el componente seleccionado al componente de item-list
  @Input() selected: string; // tengo que saber cuando pincho un item, se oculta el otro componente

  constructor(private lenguageService: LanguageService) {
    this.links = ['welcome', 'list'];
    this.selectedChange = new EventEmitter();
    this.selected = this.links[0];

    this.idiomas = [
      { key: 'es', value: 'Español' },
      { key: 'en', value: 'English' },
      { key: 'va', value: 'Valencià' },
    ]
  }

  // funcion para cambiar el lenguaje!
  onChange() {
    //this.languageSelected.emit(this.selectedLanguage);
    this.lenguageService.setLanguage(this.selectedLanguage);
  }

  // función para saber qué link pincho y el componente que tiene que mostrarse
  select(link: string) {
    this.selected = link;
    this.selectedChange.emit(this.selected);
  }

}
