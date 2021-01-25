import { Routes } from "@angular/router";

import { CategoryComponent } from "src/app/pages/Category/Category.component";
import { ProductsComponent } from "src/app/pages/Products/products.component";


export const AdminLayoutRoutes: Routes = [
    
    { path: 'Products',      component: ProductsComponent },
    { path: 'Categories',         component: CategoryComponent},   
    
];