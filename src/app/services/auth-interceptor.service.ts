import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NgxSpinnerService } from 'ngx-spinner';

const SERVER_BASE_URL = 'http://localhost:7861/friend-zone/v1';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorage,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    return this.localStorage.getItem('authInfo').pipe(
      mergeMap((authInfo: any) => {
        let updatedHeaders: any = {
          'Content-Type': 'application/json; charset=UTF-8'
        };
        if (authInfo) {
          updatedHeaders.Authorization = 'Bearer ' + authInfo.accessToken;
        }
        if (!request.url.startsWith('/')) {
          updatedHeaders.Authorization = 'Bearer KgPTnUZuuvuTU790Bh7b4ZL8LwVR';
        }
        let clonedRequest = request.clone({
          setHeaders: updatedHeaders,
          url: this.getAbsoluteUrl(request.url)
        });
        return next.handle(clonedRequest).pipe(
          tap(
            (event: any) => {
              if (event instanceof HttpResponse) {
                this.spinner.hide();
                return next.handle(clonedRequest);
              }
            },
            (error: any) => {
              if (error instanceof HttpErrorResponse) {
                switch ((<HttpErrorResponse>error).status) {
                  case 401:
                    return this.handle401(request, next);
                  default:
                    return next.handle(clonedRequest);
                }
              } else {
                return Observable.throw(error);
              }
            }
          )
        );
      })
    );
  }

  private handle401(request: HttpRequest<any>, next: HttpHandler) {
    this.spinner.hide();
    return next.handle(request);
  }

  private getAbsoluteUrl(url: string): string {
    let absoluteUrl: string;
    if (url.startsWith('/')) {
      absoluteUrl = `${SERVER_BASE_URL}${url}`;
    } else {
      absoluteUrl = url;
    }
    return absoluteUrl;
  }

  private getHeaders(): any {}
}
