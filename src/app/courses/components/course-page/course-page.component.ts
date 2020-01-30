import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  routeParams: {
    id?: string;
  } = {};

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.router.snapshot);
  }

  public goToPage(){
   // this.router.navigate([""])
  }
}
