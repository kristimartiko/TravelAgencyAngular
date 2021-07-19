import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private helper = new JwtHelperService();

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

  getAdmin() {
    if(localStorage.getItem('token') !== null) {
      let token = localStorage.getItem("token");
      let tokenPayload = this.helper.decodeToken(token);
      let role = JSON.parse(JSON.stringify(tokenPayload.role[0].authority));

      if(!this.helper.isTokenExpired(token) && role === 'Admin') {
        return true;
      }
    }
    return false;
  }
}
