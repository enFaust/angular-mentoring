import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.css']
})
export class CoursesSearchComponent   {

  // @ts-ignore
  @ViewChild('searchText')
  private searchText: ElementRef;

  @Output()
  private finder: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public searchByTitle(): void {
    this.finder.emit(this.searchText.nativeElement.value);
  }
}
