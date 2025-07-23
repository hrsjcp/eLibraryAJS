import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  userService = inject(User);

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // Handle login logic here
      console.log('Login successful:', loginForm.value);
      this.userService.loginUser(loginForm.value).subscribe(
        response => {
          console.log('User logged in successfully:', response);
          localStorage.setItem('token', response.token); // Assuming the response contains a token
        },
        error => {
          console.error('Error logging in user:', error);
        }
      );
      loginForm.reset();
    } else {
      console.error('Login form is invalid');
    }
  }

}
