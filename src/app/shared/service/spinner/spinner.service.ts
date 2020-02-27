import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerState = false;

  constructor() {
  }

  public turnOn() {
    this.spinnerState = true;
  }

  public turnOff() {
    this.spinnerState = false;
  }

  public getSpinnerState(): boolean {
    return this.spinnerState;
  }
}
