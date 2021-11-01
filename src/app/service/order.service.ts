import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'http://localhost:8081/api/v1/order';

  constructor(private http: HttpClient) {}

  getOrderHistoryForUser(user: User): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.baseUrl}`);
  }

}
