import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dev-welcome',
  template: 
  `
  <div [ngStyle]="{'background-color':'#D3D3D3'}">
    <h1 class="text-center">{{ translate('Bienvenido') }}</h1>
    <p class="text-center">{{ translate('TextoATraducir') }}</p>
  </div>
  `
})
export class WelcomeComponent {

      // nos entra la información del lenguaje desde el componente language-selector, que tiene un emiter
      @Input() language: string;
      // declaración del mapa que guardará los textos a traducir
      text: Map <string, object>;

      // constructor donde definimos el mapa con los textos según el idioma seleccionado
      constructor() {
        this.text = new Map();
        this.text.set('Bienvenido', {
          en: 'Welcome to DevShop!',
          es: 'Bienvenido a DevShop!',
          va: 'Benvingut a DevShop!'
        });

        this.text.set('TextoATraducir', {
          en: 'Where you can buy anything you imaging',
          es: 'Donde puedes comprar cualquier cosa que imagines',
          va: 'On pots comprar qualsevol cosa que imagines'
        });
      }

      // funcion que se encarga de traducir segun el lenguaje que nos llega del nav-bar 
      // (que a su vez nos llega del language-selector), por defecto el texto será la propia
      // palabra clave del map
      translate(keyMap: string){
        const translation = this.text.get(keyMap);
        return translation[this.language] ? translation[this.language] : keyMap;
    }
}
