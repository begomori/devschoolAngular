import { Component } from '@angular/core';
/*
interface MyType {
  value: number,
  title: string
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'devschool';
    language: string;

  /*
  name = 'Angular';
  miNombre = 'Bego';
  miApellido1 = 'Morillas';
  miApellido2 = 'Guijarro';
  numero = 10;

  getYourName(n) {
    return n + ' es tonta';
  }
  
  onClock(cosa: boolean){
    console.warn(cosa)
  }

  numeros: MyType[];
  constructor() {
    this.numeros = [
      { value: 1, title: 'title-1'},
      { value: 2, title: 'title-2'},
      { value: 3, title: 'title-3'},   
      { value: 4, title: 'title-4'},
      { value: 5, title: 'title-5'},
      { value: 6, title: 'title-6'},
      { value: 7, title: 'title-7'},
      { value: 8, title: 'title-8'}
    ];

    this.inputValue = 'Escribe';

  }

  inputValue: string;

  onValueChange(newValue) {
    console.log(newValue);
  } */
}
