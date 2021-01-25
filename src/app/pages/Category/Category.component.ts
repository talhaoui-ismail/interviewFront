import { CategoryService } from 'src/app/services/services/Category/CategoryService';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Modules/Category';
 

@Component({
  selector: 'Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories:Category[];
  category:Category;
  constructor(private categoryService:CategoryService) { }
  
  ngOnInit() {
    this.categoryService.Categories().subscribe((data)=>{
      this.categories=data.data;
      this.category=this.categories[0];
      //console.log(this.categories);
    })
  }
  showCategory(cat){
    this.category=cat;
   
    }
  GetCategories(){
    this.categoryService.Categories().subscribe((data)=>{
      this.categories=data.data;
      this.category=this.categories[0];
      //console.log(this.categories);
    })
  }
  

}
