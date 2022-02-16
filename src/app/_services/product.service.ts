import { Image } from './../admin/product-form/image';
import { Product } from './../admin/product-form/product';
import { Category } from './../category/category';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFilterComponent } from '../product-filter/product-filter.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:Product[]=[];
  image:Image[]=[];
  categories:Category[]=[];
  selectedCategories:string;

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL+"/find/all/products");
  }

  getProductById(category_id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL+"/find/all/product/"+category_id);
  }

  deleteProduct(product_id:number):Observable<void>{
    return this.httpClient.delete<void>(API_URL+"/admin/delete/product/"+product_id);
  }

  // addProduct(product):Observable<any>{
  //   return this.httpClient.post(API_URL+"/admin/add/product", {
  //     name : product.name,
  //     description : product.description,
  //     price : product.price,
  //     imageUrl : product.imageUrl,
  //     category : [product.category]
  //   }, httpOptions);
  // }
  // addProduct(name, description, price, [category], fileToUpload:File){
  //   const endpoint = API_URL+'/admin/add/product';
  //   const formData : FormData = new FormData();
  //   formData.append('name', name);
  //   formData.append('description', description);
  //   formData.append('price', price);
  //   formData.append('category', category);
  //   formData.append('imageUrl', fileToUpload, fileToUpload.name);
  //   return this.httpClient.post(endpoint, formData);
  // }
  // addProduct(name, description, price, [category], image:File){
  //   const endpoint = API_URL+'/admin/add/product';
  //   const formData : FormData = new FormData();
  //   formData.append('name', name);
  //   formData.append('description', description);
  //   formData.append('price', price);
  //   formData.append('category', category);
  //   formData.append('image',image , image.name);
  //   return this.httpClient.post(endpoint, formData);
  // }
  addProduct(product:Product, image:File){
    const endpoint = API_URL+'/admin/add/product';
    const formData : FormData = new FormData();
    formData.append('image',image, image?.name);
    formData.append('product', JSON.stringify(product));

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'multipart/form-data')
    }


    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.set('Accept', 'application/json');
    // const options = {
    //   headers: new HttpHeaders().append('Content-Type', 'multipart/form-data')
    // }

    // var header = new HttpHeaders({'Content-Type':'application/json'})

    // const options ={
    //   headers : new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //     'Content-Type': 'application/json'
    //   })
    // }
  
    return this.httpClient.post(endpoint, formData, {headers});
  }
  

}
