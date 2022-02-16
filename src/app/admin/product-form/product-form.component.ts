import { Category } from './../../category/category';
import { CategoryService } from '../../_services/category.service';
import { ProductService } from '../../_services/product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  content:string;

  form:any={};
  defaultImagePath:string ="./assets/images/default-image.jpg";
  fileToUpload:File = null;
  addImageForm:any={};
  

  public product:Product[]=[];
  public categories:Category[]=[];
  isSaved=false;

  constructor(
    private router:Router,
    private httpClient:HttpClient, 
    private productService:ProductService, 
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (response:Category[])=>{
        this.categories= response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
  }

  // onSaveProduct():void{
  //   this.productService.addProduct(this.form).subscribe(
  //     data =>{
  //       console.log(data.value);
  //       this.isSaved=true;
  //       this.defaultImagePath = "./assets/images/default-image.jpg";
  //     },
  //     (error:HttpErrorResponse)=>{
  //       alert(error.message);
  //       this.defaultImagePath = "./assets/images/default-image.jpg";
  //     }
  //   );
  // }

  onSaveProduct():void{
    this.productService.addProduct(this.form, this.fileToUpload).subscribe(
      data => {
        console.log('done');
        this.defaultImagePath = "./assets/images/default-image.jpg";
      }
    );
  }

  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.defaultImagePath = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  // handleFileInput(event:Event){
  //   const target = event.target as HTMLInputElement;
  //   const files = target.files as FileList;
  //   console.log(files);
  // }

  resetForm():void{
    this.form.reset();
  }


  // selectedFile: File;
  // retrievedImage: any;
  // base64Data: any;
  // retrieveResonse: any;
  // message: string;
  // imageName: any;

  //   //Gets called when the user selects an image
  //   public onFileChanged(event) {
  //     //Select File
  //     this.selectedFile = event.target.files[0];
  //   }

  //     //Gets called when the user clicks on submit to upload the image
  // onUpload() {
  //   console.log(this.selectedFile);
    
  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
  //   //Make a call to the Spring Boot Application to save the image
  //   this.httpClient.post('http://localhost:8080/product/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Product uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     }
  //     );
  // }

      // //Gets called when the user clicks on retieve image button to get the image from back end
      // getImage() {
      //   //Make a call to Sprinf Boot to get the Image Bytes.
      //   this.httpClient.get('http://localhost:8080/product/get/' + this.imageName)
      //     .subscribe(
      //       res => {
      //         this.retrieveResonse = res;
      //         this.base64Data = this.retrieveResonse.picByte;
      //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      //       }
      //     );
      // }
      

}
