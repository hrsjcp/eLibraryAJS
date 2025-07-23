import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { PAGE_URLS } from '../../structure/prototype';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  constructor(private userService: User, private router: Router) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // Handle login logic here
      console.log('Login successful:', loginForm.value);
      this.userService.loginUser(loginForm.value).subscribe(
        response => {
          console.log('User logged in successfully:', response);
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('token', response.token);
          }
          this.router.navigate([PAGE_URLS.DIGILIB_MAIN_PAGE]);
        },
        error => {
          console.error('Error logging in user:', error);
          window.location.reload();
        }
      );
      loginForm.reset();
    } else {
      console.error('Login form is invalid');
    }
  }

}
