import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dev-welcome',
  template: 
  `
  <div [ngStyle]="{'background-color':'#D3D3D3'}">
    <h1 class="text-center">{{ translate('welcome') }}</h1>
    <p class="text-center">{{ translate('intro') }}</p>
  </div>
  `
})
export class WelcomeComponent {

      // nos entra la información del lenguaje desde el componente language-component, que tiene un emiter
      @Input() language: string;
      // declaración del mapa que guardará los textos a traducir
      translations: Map <string, object>;

      // constructor donde definimos el mapa con los textos según el idioma seleccionado
      constructor() {
        this.translations = new Map();
        this.translations.set('welcome', {
          en: 'Welcome to DevShop!',
          es: 'Bienvenido a DevShop!',
          va: 'Benvingut a DevShop!'
        });

        this.translations.set('intro', {
          en: 'Where you can buy anything you imaging',
          es: 'Donde puedes comprar cualquier cosa que imagines',
          va: 'On pots comprar qualsevol cosa que imagines'
        });
      }

      ngOnInit() {

      }

      translate(translationKey: string): string {
        const translation = this.translations.get(translationKey);
        return translation[this.language] ? translation[this.language] : translationKey;
    }
}
