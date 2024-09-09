import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from '../../../shard/servieses/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
isLoding : boolean=false

errMessage : string=""


registerForms : FormGroup =new FormGroup({

  name : new FormControl(null,[Validators.required , Validators.minLength(3),Validators.maxLength(20)]),

  email:new FormControl(null , [Validators.required , Validators.email]),

  password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][0-9]{6}/)]),

  rePassword:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][0-9]{6}/)]),

  phone:new FormControl(null , [Validators.required , Validators.pattern(/^(010|011|012)[0-9]{8}$/)])
} , this.confirmPAssword)
constructor(private _AuthService:AuthService , private _Router:Router){}
registerSubmit(){
  this.isLoding=true

  this._AuthService.sendRegister(this.registerForms.value).subscribe({
    next : (res)=>{
      this.isLoding=false

      this._Router.navigate(['login'])

    },
    error : (err)=>{
      this.errMessage =err.error.message
      this.isLoding=false
    }
  })
}


confirmPAssword(g:any){
  if(g.get('password').value === g.get('rePassword').value){
    return null
  }
  else{
    return{'passwordMatched' : true}
  }
}
}
