import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('f') loginForm!: NgForm;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http
      .post<{ token: string }>(
        'https://fakestoreapi.com/auth/login',
        this.loginForm.value
      )
      .subscribe(
        (res) => {
          console.log('.. L19', res.token);
          localStorage.setItem('token', res.token);

          const path = localStorage.getItem('path');
          this.router.navigateByUrl(path!);
        },
        (error) => {
          console.log('Login failed, use mor_2314/83r5^_');
        }
      );
  }
}
