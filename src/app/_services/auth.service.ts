import { ActivatedRoute} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(
    private http: HttpClient, 
    private router:ActivatedRoute) 
    { }


  login(credentials): Observable<any> {
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);

    return this.http.post(AUTH_API + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + '/user/signup', {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode
    }, httpOptions);
  }
}
