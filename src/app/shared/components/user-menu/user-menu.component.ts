import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../model/course/user";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input()
  public user: User;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }


  constructor() {}

  public logout(){
    this.logOut.emit();
  }
}
