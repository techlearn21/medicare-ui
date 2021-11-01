import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  tempCategory: string;
  categories: Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit() {
    this.saveProduct();
    this.goToProductList();
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(data => {
      console.log(this.product);
    },
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product-list']);
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    },
    error => console.log(error));
  }

  onChange(event) {
    this.tempCategory = event.target.value;
    console.log(this.tempCategory);
    this.categoryService.getCategoryByName(this.tempCategory).subscribe(data => {
      this.product.category = data;
      console.log('retrieved category: ' + data.name + '/' + data.description);
    },
    error => console.log(error));
  }

}
