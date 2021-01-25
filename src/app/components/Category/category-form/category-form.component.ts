import { CategoryService } from './../../../services/services/Category/CategoryService';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/Modules/Category';

@Component({
  selector: 'AddCategoryForm',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input() category:Category;
  @Output() GetAllCategories: EventEmitter<any> = new EventEmitter();
  disable=true;
  addOrUpd;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  SubmitForm(Form,$event:Event){
    var activeButton = document.activeElement.id;
    switch(activeButton){
      case'add':
      this.disable=false;
      this.category={"id_category":0,"name":"","description":""}
      this.addOrUpd='add';
      break;
      case 'upd':
       
        this.disable=false;
        this.addOrUpd='upd';
      break;
      case'del':
       this.categoryService.DeleteCategory(this.category).subscribe(()=>{
        this.GetAllCategories.emit();
       });
      break;
      case'sub':
      this.disable=true;
      if(this.addOrUpd=='add'){
         this.categoryService.AddCategory(this.category).subscribe(()=>{
          this.GetAllCategories.emit();
         });
      }else{
         this.categoryService.UpdateCategory(this.category).subscribe(()=>{
          this.GetAllCategories.emit();
         });
      }
      break;
      
    }
    
  }

}
