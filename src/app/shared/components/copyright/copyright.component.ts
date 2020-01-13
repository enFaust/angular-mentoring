import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CopyrightComponent {

  constructor() { }
}
