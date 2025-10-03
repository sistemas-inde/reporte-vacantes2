import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private Router: Router) {}

  login() {
    // Usuarios de prueba
    if (this.username === 'sistemas' && this.password === '12345') {
      this.Router.navigate(['/dashboard']);
    } else if (this.username === 'rh' && this.password === '12345') {
      this.Router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
