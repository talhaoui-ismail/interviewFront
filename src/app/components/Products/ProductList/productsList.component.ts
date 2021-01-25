
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/Modules/Product';
import { ProductService } from 'src/app/services/services/product/product.service';
import { EventEmitter } from '@angular/core';
 

 

@Component({
  selector: 'product-List',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productsList.component.scss']
})
export class ProductsList {
  
  @Input ()Categories;

  @Output() product=new EventEmitter();
  @Input() Products:Product[];
  constructor(private router:Router,private productService: ProductService) {   
  }

  myFunction(b:Product){
    this.productService.SendProduct(b);
  }
  

}
