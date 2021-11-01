import { SearchResultComponent } from './page/search-result/search-result.component';
import { EditProductComponent } from './prod/edit-product/edit-product.component';
import { AddProductComponent } from './prod/add-product/add-product.component';
import { EditCategoryComponent } from './prod/edit-category/edit-category.component';
import { CategoryListComponent } from './prod/category-list/category-list.component';
import { AddCategoryComponent } from './prod/add-category/add-category.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './prod/product-list/product-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'add-user', component: AddUserComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'home', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
