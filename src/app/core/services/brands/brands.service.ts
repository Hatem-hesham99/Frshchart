import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private httpClient:HttpClient) { }


  getAllbrands():Observable<any>{
     return this.httpClient.get(`${environment.basUrl}/api/v1/brands`)
  }

}
