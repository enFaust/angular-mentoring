import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-wrapper-page',
  templateUrl: './wrapper.page.html',
  styleUrls: ['./wrapper.page.css']
})
export class WrapperPage {

  routerChanged = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
        this.routerChanged = false;
      }
    });
  }

}
