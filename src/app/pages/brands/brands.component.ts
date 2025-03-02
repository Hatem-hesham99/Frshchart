import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { Ibrands } from '../../shared/interfaces/ibrands';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  private readonly brandsService=inject(BrandsService)

  brandData:Ibrands[]=[]

ngOnInit(): void {
  this.getBrands()
}

  getBrands(){
    this.brandsService.getAllbrands().subscribe({
      next:(res)=>{
          console.log(res);
          this.brandData = res.data
      }
    })
  }

}
