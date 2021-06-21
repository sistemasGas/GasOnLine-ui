import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem('access_token_ads04');
      if(token != null){
          request = request.clone({
              setHeaders: {
                  'Content-Type': 'application/json',
                   Authorization: `bearer ${token}`
              }
          });
      }


      return next.handle(request).pipe(tap(() => { },
          (err: any) => {
              if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                      localStorage.removeItem('access_token_ads04');
                      this.router.navigate(['/login']);
                  }
              }
          }));
  }

}
