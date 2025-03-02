import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Api ==>1-inject service httpClient 2-function return observable 3-call function in componenet   


  constructor(private httpClient:HttpClient) { }


  getAllProducts():Observable<any>{
   return this.httpClient.get(`${environment.basUrl}/api/v1/products`)
  }
  getSpacificProduct(id:string):Observable<any>{
    return this.httpClient.get(`${environment.basUrl}/api/v1/products/${id}`)
  }

}
