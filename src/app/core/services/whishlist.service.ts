import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`

  whishNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }

  addToWhislist(prodId:string|undefined):Observable<any> {

  return this._HttpClient.post(this.baseUrl + `wishlist`,
  {
    productId: prodId
}
  )
  }

  updateWhishCount(prodId:string ,whishNum:number):Observable<any> {

    return this._HttpClient.put(this.baseUrl + `wishlist/${prodId}` ,
    {
      count:whishNum 
  }
    
    ) 
    
  }

  getWhishlist():Observable<any> {

    return this._HttpClient.get(this.baseUrl + `wishlist`)
    }

    removeWhishlist(prodId:string|undefined):Observable<any> {

      return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`)
      }
}
