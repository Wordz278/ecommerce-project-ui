import { Roles } from '../../register/role';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';


const AUTH_API = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roleForm:FormGroup;
  roles:Roles[]= [];


  constructor(private authService:AuthService, private http:HttpClient, private userService:UserService) {
   }


  ngOnInit(): void {
      this.userService.getRoles().subscribe(
        (response:Roles[])=>{
          this.roles = response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }

    
  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
