import { Component } from '@angular/core';
import { Item } from './interface/item';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');
    this.selectedLink = 'welcome';

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  } 
    title = 'devschool';
    item: Item;
    selectedLink: string;

  selectedItem(item: Item) {
    this.selectedLink = 'item';
    this.item = item;
  }

  onLanguageChange(language: string) {
    this.translate.use(language);
  }
}
