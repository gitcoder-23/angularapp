import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUserByPhone(phone: number) {
    return this.http.get<any[]>(`${this.url}?phone=${phone}`);
  }
}
