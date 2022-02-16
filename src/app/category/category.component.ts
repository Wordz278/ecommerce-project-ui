import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { Product } from '../admin/product-form/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public products : Product[] = [];
  public categories : Category[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }


}
