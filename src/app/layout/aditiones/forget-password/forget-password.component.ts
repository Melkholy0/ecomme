import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shard/servieses/auth.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  isCodeForm : boolean =false;
  isNewPassForm : boolean =false;
  isForget : boolean=false;

  ///
  emailForm : FormGroup =new FormGroup({
    email : new FormControl (null , [Validators.required , Validators.email])
  })
/////


codeForm : FormGroup = new FormGroup ({
  resetCode: new FormControl(null , [Validators.required])
})

///////



restPassForm: FormGroup = new FormGroup({
  email : new FormControl (null , [Validators.required , Validators.email]),
  newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][0-9]{6}/)]),
})


constructor(private _AuthService:AuthService , private _Router:Router){}

//////

forgetsup(){
this.isForget=true

this._AuthService.sendEmailAPI(this.emailForm.value).subscribe({
  next : (res)=>{
    if(res.statusMsg == "suc"){
      this.isCodeForm = true
      this.isForget=false
    }
  },
  error : (err)=>{}
})
  
}
/////////

codesup(){
  this.isForget=true
  this._AuthService.sendCodeAPI(this.codeForm.value).subscribe({
    next : (res)=>{
      this.isCodeForm=false
      this.isNewPassForm=true
      this.isForget=false

    },

    error : (err)=>{}
  })
  
}


//////////
newPassSup(){
  this.isForget=true 
  this._AuthService.resPassAPI(this.restPassForm.value).subscribe({
    next : (res)=>{
    ////
      localStorage.setItem('userToken' , res.token);
      ////
      this._AuthService.userInform()
      ////
      this._Router.navigate(['home'])



      this.isForget=false
    }
  })
  
}
}



