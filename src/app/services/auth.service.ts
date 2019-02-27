import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorage: LocalStorage, private router: Router) {}

  authenticateUser(): Observable<boolean> {
    return this.localStorage.getItem('authInfo').pipe(
      map((authInfo: any) => {
        if (authInfo && authInfo.accessToken) {
          return true;
        }
        return false;
      })
    );
  }

  logout(): Observable<boolean> {
    return this.localStorage.removeItem('authInfo').pipe(
      map((isRemoved: boolean) => {
        if (isRemoved) {
          this.router.navigate(['/login']);
          return isRemoved;
        }
      })
    );
  }
}
