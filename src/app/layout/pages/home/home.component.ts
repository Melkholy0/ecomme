import { Component } from '@angular/core';
import { ProductsService } from '../../../shard/servieses/products.service';
import { Product } from '../../../shard/interfaces/product';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../shard/servieses/cart.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SerchPipe } from '../../../shard/paip/onSale/serch.pipe';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , CarouselModule  , CurrencyPipe,SerchPipe,FormsModule , TranslateModule] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  hamada : string =""
///////////coursor///////////////////
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  /////

  
  allProducts : Product[]= []


  constructor(private _ProductsService:ProductsService , private _ToastrService:ToastrService , private _CartService:CartService){}

  ngOnInit(){

    if(typeof localStorage !=='undefined'){
      localStorage.setItem('currentPage' , '/home')


  this._ProductsService.getAllProductsAPI().subscribe({
    next : (res)=>{
      this.allProducts=res.data
      console.log(res.data)
    },
    error : (err)=>{}
  })

    }
  }
  

  
  addToCart(pId:string)
  {
    this._CartService.addToCartAPI(pId).subscribe((res)=>{
      this._ToastrService.success(res.message)
    })
    
    
  
  }
}
