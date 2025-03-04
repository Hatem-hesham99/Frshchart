import { CartService } from './../../core/services/cart/cart.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit ,OnDestroy {


  cancelData!:Subscription
  cancelAddProduct!:Subscription

  products: Iproduct[] = []

  private readonly productService = inject(ProductService)
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)


  ngOnInit(): void {
    this.getData()
  }

  getData() {
   this.cancelData= this.productService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data

      },
      error: (err) => {
        console.log(err);

      }
    })
  }



  addProductToCart(id: string) {
   this.cancelAddProduct= this.cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status === "success") {
          this.toastrService.success(res.message, 'Add To Cart',)
          this.cartService.cartNumber.next(res.numOfCartItems)
          console.log(this.cartService.cartNumber.getValue());

        }

      },
      error: (err) => {
        console.log(err);


      }
    })
  }


  ngOnDestroy(): void {
    this.cancelData.unsubscribe()
    this.cancelAddProduct.unsubscribe()
  }
}
