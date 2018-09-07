import { Pipe, PipeTransform } from '@angular/core';
import { es } from './lang-es';
import { en } from './lang-en';
import { va } from './lang-va';
import { LanguageService } from '../language.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  translations: Map<string, object>;

  constructor(private lenguageService: LanguageService) {
    this.translations = new Map([['es', es], ['en', en], ['va', va]]);
  }

  transform(key: string): any {
    const language = this.lenguageService.getLanguage();
    if (!language) { return key; }

    const translation = this.translations.get(language);

    if (!translation) { return key; }

    return translation[key];
  }

}