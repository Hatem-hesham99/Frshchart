import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Icart } from '../../shared/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartData:Icart = {} as Icart
  private readonly cartService= inject(CartService)
  private readonly toastrService = inject(ToastrService)

  ngOnInit(): void {
    this.getCarttData()
  }

  getCarttData(){
    this.cartService.getLoggedUserCart().subscribe({
      next:({data})=>{
        this.cartData = data
        console.log(data);  
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  removeProductFromCart(id:string){
    this.cartService.RemovespecificcartItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.toastrService.error('Delet This Product Done' , 'Delet Product')
       // this.getCarttData()
        this.cartData = res.data;
        this.cartService.cartNumber.next(res.numOfCartItems)
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  UpdatecartproductNumber(id:string,count:number){
    this.cartService.Updatecartproductquantity(id,count).subscribe({
      next:({data})=>{
        console.log(data);
        this.cartData = data
        this.toastrService.success('number of product is updata','update')
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }

  clearCart(){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.cartService.Clearusercart().subscribe({
          next:(res)=>{
            console.log(res);
            this.cartService.cartNumber.next(0)
              this.cartData = {} as Icart
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            
            
          },
          error:(err)=>{
            console.log(err);
            
          }
        })


      
      }
    });



   
  }

}
