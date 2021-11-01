import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8081/api/v1/user"
  user: User = new User();

  constructor(private http: HttpClient){}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  getCurrentUser() {
    this.user.firstName = 'fname';
    this.user.lastName = 'lname';
    this.user.email = 'lname@email.com';
    return this.user;
  }
}
