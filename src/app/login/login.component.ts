import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  returnUrl: string;

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router:Router,
    private app:AppComponent) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    // localStorage.setItem('returnUrl', returnUrl);
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    let returnUrl = localStorage.getItem('returnUrl');
    this.router.navigateByUrl(returnUrl).then(
      ()=>{window.location.reload();}
    );

  }

}
