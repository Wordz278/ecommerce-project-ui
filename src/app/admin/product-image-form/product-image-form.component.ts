import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-image-form',
  templateUrl: './product-image-form.component.html',
  styleUrls: ['./product-image-form.component.css']
})
export class ProductImageFormComponent implements OnInit {
  @Input('image') image;

  constructor() { }

  ngOnInit(): void {
  }

}
