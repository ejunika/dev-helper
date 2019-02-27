import { Injectable } from '@angular/core';
import { AbstractGuardService } from './abstract-guard.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardService extends AbstractGuardService {
  constructor(protected router: Router, protected authService: AuthService) {
    super(router, authService);
  }
}
