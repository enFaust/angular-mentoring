import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangePlateBorder]'
})
export class ChangePlateBorderDirective implements OnInit {

  @Input('appChangePlateBorder')
  public creationDate: Date;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    const elementStyle = this.element.nativeElement.style;

    if (this.isFreshCourse()) {
      elementStyle.borderWidth = '2px';
      elementStyle.borderColor = '#28a745';
    }
    if (this.isUpcomingCourse()) {
      elementStyle.borderWidth = '2px';
      elementStyle.borderColor = 'blue';
    }
  }

  private isFreshCourse() {

    const currentDate = new Date();
    const dateOffset = (24 * 60 * 60 * 1000) * 14;
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setTime(currentDate.getTime() - dateOffset);

    return (this.creationDate < currentDate) && (this.creationDate >= twoWeeksAgo);
  }

  private isUpcomingCourse() {
    return (this.creationDate > new Date()) ;
  }

}
