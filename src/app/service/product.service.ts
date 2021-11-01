import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8081/api/v1/product';
  productList: Product[];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  searchProduct(text: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/search?keyword=${text}`);
  }
}
