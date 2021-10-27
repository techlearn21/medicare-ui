import { CategoryService } from '../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: number;
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCategoryById(this.id);
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

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(data => {
      this.category = data;
    },
    error => console.log(error()));
  }

}
