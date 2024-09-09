import { Enviroment } from './../../Base/Enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userTokenHeader : any = {token : localStorage.getItem('userToken')}

  constructor(private _HttpClient:HttpClient) { }

  addToCartAPI(pId:string):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/cart`,{productId:pId} 
    
    
     
     )
     

    
  }

  updateCartAPI(pId:string , count : number):Observable<any>
  {
    return this._HttpClient.put(`${Enviroment.baseUrl}/api/v1/cart/${pId}`,{count:count} 
     
    )

  
  }

  getCartAPI():Observable<any>
  {
    return this._HttpClient.get(`${Enviroment.baseUrl}/api/v1/cart` 
     
    )
  }

  removeItemCartAPI(pId:string):Observable<any>
  {
    return this._HttpClient.delete(`${Enviroment.baseUrl}/api/v1/cart/${pId}` 
   
    )
  }

  clearCartAPI():Observable<any>
  {
    return this._HttpClient.delete(`${Enviroment.baseUrl}/api/v1/cart` ,
     
    )
  }

  
}

































