import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: String;

  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      let token = JSON.parse(JSON.stringify(response));
      localStorage.setItem('token', token.jwt);
      localStorage.setItem('name', token.firstName);
      this.router.navigate(['/home']);
      this.snackBar.open('Succssfully Logged In!', '', {
        duration: 3000
      })
    }, (error: any) => {
      this.error = "Invalid Email/Password";
    })
  }

}
