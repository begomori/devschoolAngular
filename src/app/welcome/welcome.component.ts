import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-welcome',
  template: 
  `
  <div [ngStyle]="{'background-color':'#D3D3D3'}">
  <h1>Bienvenido a DevShop!</h1>
  <p>Donde puedes comprar cualquier cosa que imagines</p>
  </div>
  `
})
export class WelcomeComponent {

}
