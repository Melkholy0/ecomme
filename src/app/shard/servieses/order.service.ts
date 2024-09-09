import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../Base/Enviroment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }


  reqOrderAPI(cID:string ,formData : any):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/orders/checkout-session/${cID}?url=http://localhost:4200` , 

      {shippingAddress : formData } ,
      

    )
  }
}
