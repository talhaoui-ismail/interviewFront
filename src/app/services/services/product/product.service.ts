import { Links } from 'src/app/config/Links';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Modules/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _ProductCommunication=new Subject<Product>();
  ProductObservable$=this._ProductCommunication.asObservable();
  Response;
  EuroValue;
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
     
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders (this.headerDict), 
  };
  constructor(private http: HttpClient) { }
 async AddProduct(p ){
  
    if(p.currency!='EUR'){
     await  this.ConvertToEuro().subscribe(
        (data)=>{
          this.Response=data;;
          let map = new Map<string, string>()  
          for (var value in  this.Response.rates) {  
            map.set(value, this.Response.rates[value])  
              }  
          this.EuroValue=map.get(p.currency);
         p.price=p.price/this.EuroValue;
         this.http.post<any>(Links.BaseUrl + Links.AddProduct, p,this.requestOptions).subscribe();
        }
      ); 
     
     }else{
       this.http.post<any>(Links.BaseUrl + Links.AddProduct, p,this.requestOptions).subscribe();
     }
      
  }
  GetCurrencies(){
    return this.http.get<any>(Links.CurrenciesUrl);
  }
  AllProducts(){
    return this.http.get<any>(Links.BaseUrl+Links.AllProducts);
  }
  async UpdateProduct(p){
    if(p.currency!='EUR'){
      await  this.ConvertToEuro().subscribe(
         (data)=>{
           this.Response=data;;
           let map = new Map<string, string>()  
           for (var value in  this.Response.rates) {  
             map.set(value, this.Response.rates[value])  
               }  
           this.EuroValue=map.get(p.currency);
          p.price=p.price/this.EuroValue;
          this.http.put<any>(Links.BaseUrl + Links.UpdateProduct, p,this.requestOptions).subscribe();
         }
       ); 
      }else{
        this.http.put<any>(Links.BaseUrl + Links.UpdateProduct, p,this.requestOptions).subscribe();
      }
  }
  ConvertToEuro(){
    return this.http.get<any>(Links.CONVESIONAPI);
  }
  SendProduct(p:Product){
    this._ProductCommunication.next(p); 
  }
 async  DeleteProduct(product){
     this.http.delete<any>(Links.BaseUrl + Links.DeleteProduct+product.idProduct).subscribe();
  }
}
