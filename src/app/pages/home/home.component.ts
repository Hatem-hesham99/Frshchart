import { CartService } from './../../core/services/cart/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { CategoryService } from '../../core/services/category/gategory.service';
import { Icategory } from '../../shared/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {




  products: Iproduct[] = []
  categories: Icategory[] = []

  private readonly productService = inject(ProductService);
  private readonly gategoryService = inject(CategoryService);
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)


  ngOnInit(): void {
    this.getProductsData()
    this.getGategoryData()
  }


  getProductsData() {
    this.productService.getAllProducts().subscribe({

      next: (res) => {
        // console.log(res.data)
        this.products = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })

  }


  getGategoryData() {
    this.gategoryService.getCategory().subscribe({
      next: (res) => {
        this.categories = res.data
      },
      error: (err) => {
        console.log(err)
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




  customMainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    rtl:true,
    autoplayTimeout: 3000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 1
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    rtl:true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['  ', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false
  }








}




