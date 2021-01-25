import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
   MatNativeDateModule,
   MatPaginatorModule,
   MatSortModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
