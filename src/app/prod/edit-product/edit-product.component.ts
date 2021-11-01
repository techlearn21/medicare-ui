import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();
  categories: Category[];
  tempCategory: string;
  id: number;

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCategories();
    this.getProductById(this.id);
  }

  onSubmit() {
    this.updateProduct();
    this.goToProductList();
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      console.log('updated product: ' + this.product.name);
    },
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product-list']);
  }

  onChange(event) {
    this.tempCategory = event.target.value;
    this.categoryService.getCategoryByName(this.tempCategory).subscribe(data => {
      this.product.category = data;
    },
    error => console.log(error));
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      this.tempCategory = this.product.category?.name;
    },
    error => console.log(error));
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    },
    error => console.log(error));
  }

}
