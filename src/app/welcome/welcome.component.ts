import { Component, Input } from '@angular/core';

@Component({
  selector: 'dev-welcome',
  template:
    `
  <div class="jumbotron">
    <h1 class="text-center">{{ 'welcome' | translate }}</h1>
    <p class="text-center">{{ 'intro' | translate}}</p>
  </div>
  `
})
export class WelcomeComponent {

  constructor(){

  }
}
