import { EditCategoryComponent } from './prod/edit-category/edit-category.component';
import { CategoryListComponent } from './prod/category-list/category-list.component';
import { AddCategoryComponent } from './prod/add-category/add-category.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: 'add-user', component: AddUserComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
