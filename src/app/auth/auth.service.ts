import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(formValue: any) {
    return this.http.post("http://localhost:8787/login", {"email": formValue.email, "password": formValue.password});
  }

  addUser(formValue: any) {
    return this.http.post("http://localhost:8787/addUser", formValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  isLoggedIn() {
    if(localStorage.getItem('token') !== null) {
      return true;
    } else return false;
  }
}
