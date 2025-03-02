import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient   ) { }

  getCategory():Observable<any>{
     return this.httpClient.get(`${environment.basUrl}/api/v1/categories`)
  }
  getSpacificCategory(id:string):Observable<any>{
     return this.httpClient.get(` ${environment.basUrl}/api/v1/categories/${id} `)
  }

}
