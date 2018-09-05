import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dev-hello',
  template: `
  <div>
    <h1>Componente hijo</h1>
    <p>Esto es un curso de {{name}}</p>
    <h2>{{ nombre + ' ' + apellido1 + ' ' + apellido2 }}</h2>
  </div>
  <button (click)="onClick()">Click hijo</button>
  `
})
export class HelloComponent {
  @Output() sonClick: EventEmitter<string>;
  constructor() {
    this.sonClick = new EventEmitter();
  }
  
  onClick(){
    this.sonClick.emit('Me comunico con mi padre, que bien!');
  }

  @Input() name: string;
  @Input() nombre: string;
  @Input() apellido1: string;
  @Input() apellido2: string;
  @Input() numero: number;

}
