import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { IuserData } from '../../../shared/interfaces/iuser-data';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  userId:IuserData = {} as IuserData
  mytoken:string = localStorage.getItem('token')!
  constructor(private httpClient:HttpClient) { }


  CheckoutSession(id:string,data:object):Observable<any>{
    return this.httpClient.post(`${environment.basUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        "shippingAddress":  data
      })
    }
  CheckoutCash(id:string,data:object):Observable<any>{
    return this.httpClient.post(`${environment.basUrl}/api/v1/orders/${id}`,
      {
        "shippingAddress":data
           
      } )
    }
    getUserOrders(id:string):Observable<any>{
     
      return this.httpClient.get(`${environment.basUrl}/api/v1/orders/user/${id}`)
    }

    userData(){
      this.userId = jwtDecode(localStorage.getItem('token')!)
    }

}
