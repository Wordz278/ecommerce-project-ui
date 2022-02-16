import { Roles } from './../register/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getRoles():Observable<Roles[]>{
    return this.http.get<Roles[]>(API_URL+'/admin/roles');
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '/user', { responseType: 'text' });
  }

  getSuperBoard(): Observable<any> {
    return this.http.get(API_URL + '/super', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/admin', { responseType: 'text' });
  }
}
