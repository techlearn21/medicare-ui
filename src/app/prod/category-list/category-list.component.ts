import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  updateCategory(id: number): void {
    this.router.navigate(['/edit-category', id]);
  }

}
