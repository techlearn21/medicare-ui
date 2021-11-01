import { User } from './../model/user';
import { UserService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  baseUrl = 'http://localhost:8081/api/v1/cart';

  constructor(private http: HttpClient, private userService: UserService) {}

  // getCartItems(): Observable<CartItem[]> {
  //   const user = this.userService.getCurrentUser();
  //   return this.http.get(`${this.baseUrl}`);

  //   return this.http.get(`${this.baseUrl}`, user);
  // }

  getCartItems(email: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.baseUrl}?email=${email}`);
  }
}
