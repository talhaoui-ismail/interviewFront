import { ProductsList } from './../../components/Products/ProductList/productsList.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { ProductsComponent } from '../../pages/Products/products.component';
 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProductFormComponent } from 'src/app/components/Products/ProductForm/product-form/product-form.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CategoryComponent } from 'src/app/pages/Category/Category.component';
import { CategoryFormComponent } from 'src/app/components/Category/category-form/category-form.component';
 
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
   MatNativeDateModule,
   MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
  // AuthenticationService,
   MatInputModule// , FormGroup, FormControl 
   ,NgCircleProgressModule.forRoot({
    // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300
  })
    
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent,  
    ProductsList,
    CategoryComponent,
    CategoryFormComponent

    
  ],
  providers: [

  ]
})

export class AdminLayoutModule {}
