import { Component, Input } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'dev-welcome',
  template:
    `
  <div class="jumbotron">
    <h1 class="text-center">{{ 'welcome' | translate: this.lenguageService.getLanguage() }}</h1>
    <p class="text-center">{{ 'intro' | translate: this.lenguageService.getLanguage() }}</p>
  </div>
  `
})
export class WelcomeComponent {
  // nos entra la información del lenguaje desde el componente language-selector, que tiene un emiter
  @Input() language: string;

  constructor(private lenguageService: LanguageService){

  }
}
