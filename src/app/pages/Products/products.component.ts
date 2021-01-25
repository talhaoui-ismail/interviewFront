import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modules/Product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/services/product/product.service';
import { CategoryService } from 'src/app/services/services/Category/CategoryService';
import { Category } from 'src/app/Modules/Category';


@Component({
  selector: 'Product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories : Category[];
  product:Product;
  products:Product[];
  currencies;
  constructor(private router:Router,private productService: ProductService,private categoryService: CategoryService) {   
    
  }
  ngOnInit(){
    
   this.categoryService.Categories()
                      .subscribe(resp=>{this.categories=resp.data;
                            console.log("this.categories= ");
                            console.log(this.categories);
                            });
   this.productService.AllProducts()
                      .subscribe(resp=>{this.products=resp.data;
                        this.product=this.products[0];
                        });
   this.productService.GetCurrencies().subscribe(resp=>this.currencies=resp);
    }
   GetAllProducts(){
    
    this.productService.AllProducts()
    .subscribe(resp=>{this.products=resp.data;
      this.product=this.products[0];
      });
    console.log("All Products= ");
    console.log(this.products);
     
   }
  
}
