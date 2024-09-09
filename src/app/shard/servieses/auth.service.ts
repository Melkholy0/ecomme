import { Router } from '@angular/router';
import { Login, Register } from './../interfaces/register';
import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable, NgZone } from '@angular/core';
import { Enviroment } from '../../Base/Enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { MytranslateService } from './mytranslate.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData : BehaviorSubject<any> = new BehaviorSubject (null)

  constructor(private _HttpClient:HttpClient , private _Router:Router,private _MytranslateService:MytranslateService ) { 

afterNextRender(()=>{

  if(localStorage.getItem('userToken') != null){

    this.userInform()
    this._Router.navigate([localStorage.getItem('currentPage')])
  }

})


  }

  sendRegister(data:Register):Observable<any> {
   return this._HttpClient.post( `${Enviroment.baseUrl}/api/v1/auth/signup`,data)
    
  }




  sendLogin(data:Login):Observable<any> {
    return this._HttpClient.post( `${Enviroment.baseUrl}/api/v1/auth/signin`,data)
     
   }



   userInform(){
  
    //
   this.userData.next(jwtDecode(JSON.stringify( localStorage.getItem("userToken"))));
    //


    
   }




   ////==========forget======///////
sendEmailAPI(data:any):Observable<any>
{
  return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/forgotPasswords` ,data)
}
////
sendCodeAPI(data:any):Observable<any>
{
  return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/verifyResetCode`,data)
}
//////////
resPassAPI(data:any):Observable<any>
{
  return this._HttpClient.put(`${Enviroment.baseUrl}/api/v1/auth/resetPassword` ,data)
}




}
