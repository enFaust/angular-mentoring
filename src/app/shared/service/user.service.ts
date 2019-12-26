import {Injectable} from '@angular/core';
import {AuthorizedUser} from "../model/entity/impl/authorized-user";
import {User} from "../model/entity/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser():  User {
    return new AuthorizedUser(1, "Alex", "Nikolson");
  }
}

