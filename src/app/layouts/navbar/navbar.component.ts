import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslatePipe } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslat/mytranslate.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive, TranslatePipe ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  isnavToggle:boolean = true

  private readonly mytranslateService = inject(MytranslateService) 
  private readonly cartService = inject(CartService) 
  constructor( public authService:AuthService ){}


  @Input() changeNav:string =''
    cartCount!:number  

  ngOnInit(): void {
    this.cartService.cartNumber.subscribe({
      next:(res)=>{
        console.log( 'nav=' , res);
        this.cartCount = res
        
      }
    })

   this.cartService.getLoggedUserCart().subscribe({
    next:(res)=>{
      console.log(res);
      
      this.cartService.cartNumber.next(res.numOfCartItems) 
    }
   })

  }

  // translate 
  change( lang:string ):void{
    this.mytranslateService.changmylanguage(lang)
  }


  toggel(){
   this.isnavToggle = !this.isnavToggle
  }



}
