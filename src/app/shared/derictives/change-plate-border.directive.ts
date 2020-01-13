import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangePlateBorder]'
})
export class ChangePlateBorderDirective implements OnInit {

  @Input('appChangePlateBorder')
  public creationDate: Date;

  private twoWeeksAgo: Date;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {

    const elementStyle = this.element.nativeElement.style;
    elementStyle.borderWidth = '2px';

    if (this.isFreshCourse()) {
      elementStyle.borderColor = '#28a745';
    } else {
      elementStyle.borderColor = 'green';
    }

  }

  private isFreshCourse() {

    const currentDate = new Date();
    const dateOffset = (24 * 60 * 60 * 1000) * 14;
    this.twoWeeksAgo.setTime(currentDate.getTime() - dateOffset);

    return (this.creationDate < new Date()) && (this.creationDate >= this.twoWeeksAgo);
  }
}
