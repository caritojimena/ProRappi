import { Component } from '@angular/core';

/**
 * Generated class for the CanastaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canasta',
  templateUrl: 'canasta.html'
})
export class CanastaComponent {

  text: string;

  constructor() {
    console.log('Hello CanastaComponent Component');
    this.text = 'Hello World';
  }

}
