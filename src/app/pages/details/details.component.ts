import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [CarouselModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

 // productId:string ='';
  productData:Iproduct|null = null;

  constructor( private activatedRoute:ActivatedRoute ){}
  private readonly productService = inject(ProductService)
  private readonly cartService = inject(CartService )
    private readonly toastrService = inject(ToastrService)

  ngOnInit(): void {
    this.getProduct() 
  }

  getProduct(){
    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p.get('id'));
        const productId = p.get('id')!
        this.productService.getSpacificProduct(productId).subscribe({
          next:({data})=>{
            this.productData = data
            console.log(this.productData);
            
          }
        })
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


  
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:1000,
    navText: ['next.....', 'prev....'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
      
    }
  


}
