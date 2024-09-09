
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shard/servieses/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../../shard/interfaces/product';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
//////////////

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






//////////////
  pId : string | null =''
  product !:Product

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService)
  {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.pId = params.get('p_id') || ''; // Handle the case where p_id could be null

      if (this.pId) { // Only make the API call if pId is valid
        this._ProductsService.getSpefProductesAPI(this.pId).subscribe({
          next: (res) => {
            this.product = res.data; // Ensure product gets assigned
          },
          error: (err) => {
            console.error('Error fetching product:', err);
          }
        });
      } else {
        console.warn('Product ID not found in route parameters.');
      }
    });



  }}