import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {SpinnerService} from "../../service/spinner/spinner.service";

@Component({
  selector: 'app-wrapper-page',
  templateUrl: './wrapper.page.html',
  styleUrls: ['./wrapper.page.css']
})
export class WrapperPage {

  spinnerState;

  constructor(private router: Router, private spinnerService: SpinnerService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinnerState =true;
      }

      if (event instanceof NavigationEnd) {
        spinnerService.turnOff();
      }
    });
  }
}
