import { Component, Input } from '@angular/core';

@Component({
  selector: 'dev-welcome',
  template:
    `
  <div [ngStyle]="{'background-color':'#D3D3D3'}" class="xl">
    <h1 class="text-center">{{ 'welcome' | translate: language }}</h1>
    <p class="text-center">{{ 'intro' | translate: language }}</p>
  </div>
  `
})
export class WelcomeComponent {
  // nos entra la información del lenguaje desde el componente language-selector, que tiene un emiter
  @Input() language: string;
}
