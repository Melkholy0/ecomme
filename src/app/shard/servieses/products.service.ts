import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Base/Enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProductsAPI():Observable<any>{
    return this._HttpClient.get(`${Enviroment.baseUrl}/api/v1/products`)
  }
///////////////////////////////////////////////////////////////////////////////////////////////
  getSpefProductesAPI(pId:string):Observable<any>{
    return this._HttpClient.get(`${Enviroment.baseUrl}/api/v1/products/${pId}`)
  }
}
