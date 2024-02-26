import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProudectService {
  constructor( private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'

  getCategoris():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `categories`)
  }

  getProducts(pagNum:number =1):Observable<any> {

    return this._HttpClient.get(this.baseUrl + `products?page= ${pagNum} `);
  }


  getCategories():Observable<any> {

    return this._HttpClient.get(this.baseUrl + 'categories' )
  }


  getCategoryDetails(id:string|null):Observable<any> {

    return this._HttpClient.get(this.baseUrl + `categories/${id}`)
  }

  getProducDetails(id:string|null):Observable<any> {


    return this._HttpClient.get(this.baseUrl +`products/${id}` )
  }
}
