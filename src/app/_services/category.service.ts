import { Category } from '../category/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  
  getAllCategories():Observable<Category[]>{
   return this.httpClient.get<Category[]>(`${API_URL}/find/all/categories`);
  }
}
