import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  loginUser() {
    if (this.auth.login(this.email, this.password)) {
      alert("Login Successful");
      this.router.navigate(['/profile']);
    } else {
      alert("Invalid Credentials");
    }
  }
}