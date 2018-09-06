import { Pipe, PipeTransform } from '@angular/core';
import { es } from './lang-es';
import { en } from './lang-en';
import { va } from './lang-va';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  translations: Map<string, object>;

  constructor() {
    this.translations = new Map([['es', es], ['en', en], ['va', va]]);
  }

  transform(key: string, language: string): any {
    if (!language) { return key; }

    const translation = this.translations.get(language);

    if (!translation) { return key; }

    return translation[key];
  }

}