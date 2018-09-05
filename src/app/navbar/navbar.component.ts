import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  template: `
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <a class="navbar-brand" href="#">DevShop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" *ngFor="let link of links">
              <a class="nav-link" href="#">{{ link }}</a>
            </li>
            <li class="nav-item">
              <dev-language-selector (languageChange)="onlanguageChange($event)"></dev-language-selector>
            </li>
          </ul>
        </div>
      </nav>
  `
})
export class NavbarComponent implements OnInit {

    // emitimos el lenguaje seleccionado en la lista hacia el componente language-selector
    @Output() languageChange: EventEmitter<string>;
  
    links: string[];
  
    constructor() {
      this.languageChange = new EventEmitter();
      this.links = [ 'home', 'favourites', 'profile'];
     }
  
    ngOnInit() {
    }
  
    onlanguageChange(language: string) {
      this.languageChange.emit(language); //emisión del lenguaje seleccionado
  }
}
