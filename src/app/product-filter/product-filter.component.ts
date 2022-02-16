import { CategoryService } from './../_services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category/category';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: Category[] = [];
  @Input('category') category;

  constructor(private categoryService:CategoryService) { 
    this.categoryService.getAllCategories().subscribe(
      (response:Category[])=>{
        this.categories = response;
      }
    );
  }

  ngOnInit(): void {
  }


}
