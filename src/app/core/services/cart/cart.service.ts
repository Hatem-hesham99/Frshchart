import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //BehaviorSubject    set value => next(value)  get value 2 way subscribe or getvalue() 

  cartNumber:BehaviorSubject <number>= new BehaviorSubject(0)

  mytoken: string = localStorage.getItem('token')!

  constructor(private httpClient: HttpClient) { }

  addToCart(id: string): Observable<any> {
    return this.httpClient.post(`${environment.basUrl}/api/v1/cart`, {
      'productId': id
    }
    )
  }

  getLoggedUserCart():Observable<any>{
    return this.httpClient.get(`${environment.basUrl}/api/v1/cart`)
  }

  RemovespecificcartItem(id:string):Observable<any> {
    return this.httpClient.delete(`${environment.basUrl}/api/v1/cart/${id} ` )
  }
  Updatecartproductquantity(id:string,newCount:number):Observable<any>{
    return this.httpClient.put(`${environment.basUrl}/api/v1/cart/${id}`,
      {
     
        "count": newCount
  
      })
  }


  Clearusercart():Observable<any>{
    return this.httpClient.delete(`${environment.basUrl}/api/v1/cart`)
  }

}
