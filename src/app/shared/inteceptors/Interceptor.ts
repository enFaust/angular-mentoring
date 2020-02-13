import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth/auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isAuthorized()) {
      next.handle(req);
    } else {
      return undefined;
    }
  }
}
