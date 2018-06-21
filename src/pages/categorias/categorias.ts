import { Component } from '@angular/core';

/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasComponent {

  text: string;

  constructor() {
    console.log('Hello CategoriasComponent Component');
    this.text = 'Hello World';
  }

}
