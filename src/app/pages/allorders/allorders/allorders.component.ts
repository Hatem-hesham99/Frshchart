import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../../core/services/orders/orders.service';
import { Iorders } from '../../../shared/interfaces/iorders';
import { CurrencyPipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-allorders',
  imports: [CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent implements OnInit, OnDestroy {

  orderData: Iorders[] = []
  cancelSubscription!: Subscription 
  private readonly ordersService = inject(OrdersService)


  ngOnInit(): void {

    this.ordersService.userData()
    console.log(this.ordersService.userId.id);
    this.getOrderdata()
  }


  getOrderdata() {
     this.cancelSubscription = this.ordersService.getUserOrders(this.ordersService.userId.id).subscribe({
      next: (res) => {
        this.orderData = res
        console.log(this.orderData);


      },
      error: (err) => {
        console.log(err);
        console.log("errrr");


      }
    })
  }

  ngOnDestroy(): void {
    this.cancelSubscription.unsubscribe()
  }

}
