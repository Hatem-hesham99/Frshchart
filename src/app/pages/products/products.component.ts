import { CartService } from './../../core/services/cart/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{


  products:Iproduct []=[]

  private readonly productService=inject(ProductService)
  private readonly cartService=inject(CartService)
   private readonly toastrService = inject(ToastrService)
  

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.productService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.products = res.data
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }


  
  addProductToCart(id:string){
    this.cartService.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.status === "success" ){
          this.toastrService.success(res.message , 'Add To Cart', )
          this.cartService.cartNumber.next(res.numOfCartItems) 
          console.log(this.cartService.cartNumber.getValue());
          
        }
        
      },
      error:(err)=>{
        console.log(err);


      }
    })
}


}
