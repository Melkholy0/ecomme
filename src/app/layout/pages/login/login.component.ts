import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shard/servieses/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoding : boolean=false

errMessage : string=""


loginForms : FormGroup =new FormGroup({


  email:new FormControl(null , [Validators.required , Validators.email]),

  password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][0-9]{6}/)]),

} , )
constructor(private _AuthService:AuthService , private _Router:Router){}

/////////////
loginSubmit(){
  this.isLoding=true

  this._AuthService.sendLogin(this.loginForms.value).subscribe({
    next : (res)=>{
      this.isLoding=false

      //
      localStorage.setItem("userToken", res.token)
      //
      this._AuthService.userInform()
      //
      this._Router.navigate(['home'])
      //

    },

    ///////
    error : (err)=>{
      this.errMessage =err.error.message
      this.isLoding=false
    }
  })
}

}


