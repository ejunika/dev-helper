import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractGuardService implements CanActivate {
  name: string = 'Activation Guard';

  constructor(protected router: Router, protected authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authenticateUser().pipe(
      map(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            return isAuthenticated;
          } else {
            this.handleUnauthentication();
          }
        },
        (error: Error) => {
          this.handleUnauthentication();
        }
      )
    );
  }

  handleUnauthentication(): void {
    this.router.navigate(['login']);
  }
}
