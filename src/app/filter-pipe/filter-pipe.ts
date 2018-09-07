import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {
// si el boolean que viene al filtro es true, filtrame los items con available a true
// si viene falso, muéstrame todos los items
  transform(values: any[], filter: boolean, text: string): any[] {
    if(text){ // filtrado por texto
      // primero comprobamos si está el checkbox de disponibles activado; si lo está además de filtrar por texto
      // filtraremos por disponibles; si no está activo el checkbox, solo filtramos por texto
      return filter ? values.filter(value => value.available).filter(value => value.name.indexOf(text[0]) !== -1): values.filter(value => value.name.indexOf(text[0]) !== -1);
    }else if(filter && !text){ //filtrado solo por disponibles (no hay texto)
      return values.filter(value => value.available);
    }else if(!filter && !text){ // sin filtros, devuelve todos
      return values;
    }
  }
}