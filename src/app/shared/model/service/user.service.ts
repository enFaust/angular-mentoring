import {Injectable} from '@angular/core';
import {AuthorizedUser} from "../entity/impl/authorized-user";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser():  User {
    return new AuthorizedUser(1, "Alex", "Nikolson");
  }
}

