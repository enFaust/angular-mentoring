import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/course/user";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }

}
