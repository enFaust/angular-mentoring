import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";


@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.css']
})
export class CoursesSearchComponent implements OnInit, OnDestroy {

  private  searchSubject: Subject<string> = new Subject<string>();
  searchObservable: Observable<string> = this.searchSubject.asObservable().pipe(debounceTime(250));

  searchForm: FormGroup = new FormGroup({
    "textFragment": new FormControl("", [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(3)
    ])
  });

  ngOnInit(): void {
    this.searchObservable.subscribe(textFragment => this.finder.emit(textFragment));
  }

  @Output()
  private finder: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public searchByTitle(): void {
    if (this.searchForm.valid) {
      let textFragment = this.searchForm.controls['textFragment'].value;
      this.searchSubject.next(textFragment);
    }
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }
}
