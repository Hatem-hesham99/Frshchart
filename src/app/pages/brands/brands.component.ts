import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { Ibrands } from '../../shared/interfaces/ibrands';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly brandsService = inject(BrandsService)

  brandData: Ibrands[] = []
  cancelSubscrip!: Subscription

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.cancelSubscrip = this.brandsService.getAllbrands().subscribe({
      next: (res) => {
        console.log(res);
        this.brandData = res.data
      }
    })
  }

  ngOnDestroy(): void {
      this.cancelSubscrip.unsubscribe()
  }

}
