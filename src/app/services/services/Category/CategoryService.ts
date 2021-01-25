import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Links } from 'src/app/config/Links';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
     
  }
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders (this.headerDict), 
  };
  Categories() {
    return this.http.get<any>(Links.BaseUrl + Links.AllCategories);
        }


  AddCategory(C ){
  return this.http.post<any>(Links.BaseUrl + Links.AddCategory, C,this.requestOptions);
  }
  UpdateCategory(C){
    return this.http.put<any>(Links.BaseUrl + Links.UpdateCategory, C,this.requestOptions);
    }
  DeleteCategory(c){
    
   return this.http.delete<any>(Links.BaseUrl + Links.DeleteCategory+c.idCategory);
  }
}
