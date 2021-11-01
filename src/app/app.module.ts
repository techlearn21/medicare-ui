import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CategoryListComponent } from './prod/category-list/category-list.component';
import { AddCategoryComponent } from './prod/add-category/add-category.component';
import { EditCategoryComponent } from './prod/edit-category/edit-category.component';
import { ProductListComponent } from './prod/product-list/product-list.component';
import { AddProductComponent } from './prod/add-product/add-product.component';
import { EditProductComponent } from './prod/edit-product/edit-product.component';
import { NavComponent } from './page/nav/nav.component';
import { SearchComponent } from './page/search/search.component';
import { SearchResultComponent } from './page/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    NavComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
