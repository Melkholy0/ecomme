import { Login } from './../../../shard/interfaces/register';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shard/servieses/auth.service';
import { MytranslateService } from '../../../shard/servieses/mytranslate.service';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'



})
export class NavbarComponent {
  isLoding:boolean=false


  constructor(private _AuthService:AuthService  , private _Router:Router , private _MytranslateService:MytranslateService){}

//
  ngOnInit():void{
   this._AuthService.userData.subscribe(()=>{
    if(this._AuthService.userData.getValue() ==null){
      this.isLoding =false
    }
    else{
      this.isLoding =true
    }
   })
  }
/////////////////
isLogout(){
  localStorage.removeItem("userToken");
  this._AuthService.userData.next(null);
  this._Router.navigate(['/login'])
}


//////lng

changeLang(lang:string)
  {
    this._MytranslateService.changeLang(lang)

  }



}
