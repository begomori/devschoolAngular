import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dev-language-selector',
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent implements OnInit {

  // sale la info al componente welcome
  @Output() languageChange: EventEmitter<string>;

  constructor() {
    this.languageChange = new EventEmitter();
   }

  ngOnInit() {
  }

  // sacamos el valor de language hacia el componente de welcome
  onLanguageChange(language: string) {
    this.languageChange.emit(language);
  }


}