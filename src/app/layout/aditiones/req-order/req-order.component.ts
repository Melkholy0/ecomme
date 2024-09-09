;

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OrderService } from '../../../shard/servieses/order.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-req-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './req-order.component.html',
  styleUrl: './req-order.component.scss'
})
export class ReqOrderComponent {

  constructor(private _OrderService:OrderService   ,  private _ActivatedRoute:ActivatedRoute){}

userData : FormGroup =new FormGroup({
  details : new FormControl (null , [Validators.required]),
  phone : new FormControl (null , [Validators.required]),
  city : new FormControl (null , [Validators.required])
})
////////////////////////

checkout()
{

  this._ActivatedRoute.paramMap.subscribe((p)=>{

    this._OrderService.reqOrderAPI(  p.get('cartId')! , this.userData.value).subscribe({
      next : (res)=>{
        
        window.open(res.session.url , '_self')  
      
      
      
      }
    })

   

  })

  
}

}
