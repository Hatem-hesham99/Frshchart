import { subscribeOn, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../core/services/orders/orders.service';
import { open } from 'fs';

@Component({
  selector: 'app-chackout',
  imports: [ReactiveFormsModule],
  templateUrl: './chackout.component.html',
  styleUrl: './chackout.component.css'
})
export class ChackoutComponent implements OnInit,OnDestroy {

  cancelCard!:Subscription
  cancelFeza!:Subscription
  cancelcach!:Subscription
  

  private readonly formBuilder=inject(FormBuilder)
  private readonly activatedRoute =inject(ActivatedRoute)
  private readonly ordersService =inject(OrdersService)
  private readonly router =inject(Router)
  idCard:string =''
  errMassage:string = ''
  paymantForm!:FormGroup
  ngOnInit(): void {
    this.initForm()
    this.getIdCard()
  }
  initForm(){
    this.paymantForm = this.formBuilder.group({
      details: [null,[Validators.required]],
      phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
      city:[null,[Validators.required]]
    })
  }

  getIdCard(){
   this.cancelCard= this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p.get('id'));
        
        this.idCard = p.get('id')!
      }
    })
  }

  paymantFeza(){
    if(this.paymantForm.valid){

    this.cancelFeza=  this.ordersService.CheckoutSession(this.idCard,this.paymantForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.status == 'success'){
           //location.href = res.session.url
           window.open(res.session.url,"_self")
          }
          
        },error:(err)=>{
          console.log(err);
          this.errMassage = ' Chack your Cart is empty'

          
        }
      })
     
    }
    
  }
  paymantCach(){
    if(this.paymantForm.valid){

     this.cancelcach= this.ordersService.CheckoutCash(this.idCard,this.paymantForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.status=='success'){
            this.router.navigate(['/allorders'])
          }

          
        },error:(err)=>{
          console.log(err);
          this.errMassage = 'Cart is empty'
        }
      })
     
    }
    
  }

  ngOnDestroy(): void {
    this.cancelCard.unsubscribe()
    this.cancelFeza.unsubscribe()
    this.cancelcach.unsubscribe()
  }

}
