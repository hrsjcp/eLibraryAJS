import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  userService = inject(User);

  onSubmit(signupForm: any) {
    if (signupForm.valid) {
      this.userService.registerUser(signupForm.value).subscribe(
        response => {
          console.log('User registered successfully:', response);
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
      signupForm.reset();
    } else {
      console.error('Signup form is invalid');
    }
  }

}
