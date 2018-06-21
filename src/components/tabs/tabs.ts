import { Component } from '@angular/core';

import { CanastaComponent } from '../canasta/canasta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  tab2Root = CanastaComponent;

  constructor() {

  }
}