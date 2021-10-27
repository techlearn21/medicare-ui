import { CategoryService } from './../../service/category.service';
import { CategoryListComponent } from './../category-list/category-list.component';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveCategory();
    this.goToCategoryList();
  }

  saveCategory() {
    this.categoryService.updateCategory(this.category).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  goToCategoryList() {
    this.router.navigate(['/category-list']);
  }

}
