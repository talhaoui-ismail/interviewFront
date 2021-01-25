import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Modules/Category';
import { Product } from 'src/app/Modules/Product';
import { ProductService } from 'src/app/services/services/product/product.service';

@Component({
  selector: 'AddProductForm',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  @Input() categories: Category [];
  @Input()  product:Product;
  @Input() Currencies;
  @Output() GetAllProducts: EventEmitter<any> = new EventEmitter();
  firstAction;
  Disabled=true;
  constructor(private router : Router,private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.ProductObservable$.subscribe(
      data=>{
        this.product=data;
       }
    )
  }
  
   SubmitForm(Form,$event){
    var activeButton = document.activeElement.id;
    switch(activeButton){
      case'add':
      this.firstAction='add';
      this.Disabled=false;
      
      this.product={"id":0,"description":"","name":"","price":0,"categoryName":"","categoryId":0,"currency":""};
      break;
      case 'upd':
       
        this.firstAction='upd';
        this.Disabled=false;
      break;
      case'Del':
       this.productService.DeleteProduct(this.product).then(()=>this.GetAllProducts.emit());
      break;
      case'sub':
      this.Disabled=true;
      if(this.firstAction=='add'){
         this.productService.AddProduct(this.product).then(()=>this.GetAllProducts.emit());
      }else{
         this.productService.UpdateProduct(this.product); 
      }
      break;
   }
  }
  
}
