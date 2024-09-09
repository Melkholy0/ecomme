
import { Component } from '@angular/core';
import { CartService } from '../../../shard/servieses/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shard/interfaces/product';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


  allCart: any[] = [];
  cartId!: string;

  constructor(private _CartService: CartService, private _ToastrService: ToastrService) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("currentPage", '/cart');
    }

    this.loadCart();
  }

  private loadCart(): void {
    this._CartService.getCartAPI().subscribe({
      next: (res) => {
        this.allCart = res.data.products;
        this.cartId = res.data._id;
        console.log('Cart loaded:', this.allCart);
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
        this._ToastrService.error('Failed to load cart items', 'Error');
      }
    });
  }

  changeCount(pId: string, count: number): void {
    this._CartService.updateCartAPI(pId, count).subscribe({
      next: (res) => {
        this.allCart = res.data.products;
        this._ToastrService.success('Cart Updated Successfully');
      },
      error: (err) => {
        console.error('Error updating cart:', err);
        this._ToastrService.error('Failed to update cart', 'Error');
      }
    });
  }

  deleteItem(pId: string): void {
    this._CartService.removeItemCartAPI(pId).subscribe({
      next: (res) => {
        this.allCart = res.data.products;
        this._ToastrService.success('Removed Successfully!');
      },
      error: (err) => {
        console.error('Error removing item from cart:', err);
        this._ToastrService.error('Failed to remove item from cart', 'Error');
      }
    });
  }
}