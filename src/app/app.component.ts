import { ProductService } from './_services/product.service';
import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperBoard = false;
  username: string;
  returnUrl:string;

  constructor(
    private tokenStorageService: TokenStorageService, 
    private auth:AuthService, 
    private router:Router, 
    private productService:ProductService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSuperBoard = this.roles.includes('ROLE_SUPER');

      this.username = user.username;

      // this.auth.login(
      //   user=>{
      //     let returnUrl = localStorage.getItem('returnUrl');
      //     this.router.navigateByUrl(returnUrl);
      //   }
      // )
      
    }
  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  


}
