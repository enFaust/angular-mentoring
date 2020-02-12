import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  constructor(private httpClient: HttpClient) {
  }

  public getUser(): void {
    const body = {"token": localStorage.getItem('token')};
    this.httpClient.post("http://localhost:3004/auth/userInfo", body)
      .subscribe((items) => {
          console.log(items);
        }
      );
  }

  ngOnDestroy(): void {
  }
}

