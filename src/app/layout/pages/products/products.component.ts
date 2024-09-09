import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  ngOnInit(){

    if(typeof localStorage !=='undefined'){
      localStorage.setItem('currentPage' , '/product')

    }
  }

}
