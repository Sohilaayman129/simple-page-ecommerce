import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { environment } from '../environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _HttpClient=inject(HttpClient)

getallproducts():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/products`)
}
Getallcategories():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/products/categories`)
}
Getproductsspecificcategory(keyword:string):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/products/category/${keyword}`)
}
}
