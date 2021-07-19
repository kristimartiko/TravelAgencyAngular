import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getLogInState(): boolean {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn === true) {
      return true;
    } else return false;
  }

  navLogOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  isAdmin() {
    if(this.authService.getAdmin() == true) {
      return true;
    } return false;
  }

}
