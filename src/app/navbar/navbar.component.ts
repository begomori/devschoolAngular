import { Component, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { map } from 'rxjs/operators';
import { Cart } from '../interface/cart';
import { Subscription } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {

  links: string[];
  idiomas: any;
  selectedLanguage: string; //selecciono idioma de la lista
  cartLength = 0;
  private subscription: Subscription;

  // al cambiar el selector, enviar el idioma a los demás componentes
  @Output() languageSelected = new EventEmitter<string>();
  // pincho link para esconder un componente u otro!
  @Output() selectedChange: EventEmitter<string>; // envio el componente seleccionado al componente de item-list
  @Input() selected: string; // tengo que saber cuando pincho un item, se oculta el otro componente

  constructor(private lenguageService: TranslateService, private cartService: CartService) {
    this.links = ['welcome', 'login', 'list', 'cart'];
    this.selectedChange = new EventEmitter();
    this.selected = this.links[0];

    this.idiomas = [
      { key: 'es', value: 'Español' },
      { key: 'en', value: 'English' },
      { key: 'va', value: 'Valencià' },
    ]

    this.subscription = this.cartService.getItems().pipe(
      map((items: Cart[]) => {
        return items.map(i => i.quantity).reduce((total, quantity) => total + quantity, 0);
      }
      )).subscribe(totals => this.cartLength = totals);
    }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // funcion para cambiar el lenguaje!
  onChange(selectedLanguage: string) {
    this.languageSelected.emit(selectedLanguage);
    // o se puede usar el service
  }

  // función para saber qué link pincho y el componente que tiene que mostrarse
  select(link: string) {
    this.selected = link;
    this.selectedChange.emit(this.selected);
  }

}
