import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/gategory.service';
import { Icategory } from '../../shared/interfaces/icategory';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categoryData:Icategory[] = []

  private readonly categoryService=inject(CategoryService)

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryService.getCategory().subscribe({
      next:(res)=>{
        console.log(res);
        this.categoryData = res.data
        
      }
    })
  }

}
