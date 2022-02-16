import { Category } from './../category/category';
import { CategoryService } from './../_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/product-form/product';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form:any={};
  category: string;
  filteredProducts: Product[] = [];
  public products: Product[] = [];
  public categories: Category[]=[];
  constructor(
    private productService:ProductService, 
    private route:ActivatedRoute) 
  {

    this.productService
    .getAllProducts()
    .pipe(switchMap( products => {
      this.products = products;
      return this.route.queryParamMap;
    }))
    .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
         this.products.filter(p => p.category[0]['id'] === +this.category) :
         this.products;
         console.log(this.filteredProducts);
    }); 
   }
}
