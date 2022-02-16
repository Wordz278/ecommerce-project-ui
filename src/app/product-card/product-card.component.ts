import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../_services/product.service';
import { Product } from '../admin/product-form/product';
import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  private roles: string[];
  isLoggedIn = false;
  //imageSRC = 'C:/Users/A238545/ecommerce/project/ecommerce-project/ecommerce-product-images/product_';

  constructor(private tokenStorageService: TokenStorageService, private productService:ProductService) { }
  
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSuperBoard = this.roles.includes('ROLE_SUPER');


      // this.auth.login(
      //   user=>{
      //     let returnUrl = localStorage.getItem('returnUrl');
      //     this.router.navigateByUrl(returnUrl);
      //   }
      // )
      
    }
  }

  //private roles: string[];
  @Input('product') product:Product;
  @Input('category') category;
  @Input('show-actions') showActions=true;

  showAdminBoard = false;
  showSuperBoard = false;


  onDeleteProduct(productId:number){
    this.productService.deleteProduct(productId).subscribe(
      (response:void)=>{
        console.log(response);
        window.location.reload();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
  }

}
