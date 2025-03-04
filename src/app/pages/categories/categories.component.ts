import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/gategory.service';
import { Icategory } from '../../shared/interfaces/icategory';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit ,OnDestroy {

  categoryData:Icategory[] = []
  cancelCategory!:Subscription

  private readonly categoryService=inject(CategoryService)

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.cancelCategory= this.categoryService.getCategory().subscribe({
      next:(res)=>{
        console.log(res);
        this.categoryData = res.data
        
      }
    })
  }

  ngOnDestroy(): void {
    this.cancelCategory.unsubscribe()
  }
}
