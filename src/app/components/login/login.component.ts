import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'devhelper-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorage
  ) {}

  ngOnInit() {
    this.checkSession();
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(true)
    });
  }

  checkSession(): void {
    this.authService
      .authenticateUser()
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          this.router.navigate(['/app']);
        }
      });
  }

  login(): void {
    this.dataService.login(this.loginFormGroup.value).subscribe(
      (loginResponse: any) => {
        if (loginResponse.message === 'Success') {
          this.localStorage
            .setItem('authInfo', loginResponse.data[0])
            .subscribe((isDone: boolean) => {
              this.router.navigate(['/app']);
            });
        }
      },
      (error: Error) => {
        console.log('Error Occured');
      }
    );
  }
}
