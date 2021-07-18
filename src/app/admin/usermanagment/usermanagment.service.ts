import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermanagmentService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://localhost:8787/users");
  }

  addUser(formValue: any) {
    return this.http.post("http://localhost:8787/addUser", formValue);
  }
}
