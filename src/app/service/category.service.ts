import { Category } from './../model/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8081/api/v1/category';
  categoryList: Category[];

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/all`);
  }

  getCategoryByName(name: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/name/${name}`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/id/${id}`);
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.put(`${this.baseUrl}`, category);
  }

  deleteCategoryById(id: number): void {
    this.http.delete(`${this.baseUrl}/${id}`);
  }
}
