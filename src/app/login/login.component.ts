import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalstorageService } from '../services/localstorage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private localstorageService: LocalstorageService // Inyecta el servicio
  ) {
    this.loginForm = this.fb.group({
      correo_electronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  login() {  // +1
    if (this.loginForm.invalid) {  // +1
      alert('Por favor, llena todos los campos correctamente.');
      return;
    }

    const user = this.loginForm.value;

    this.userService.loginUser(user).subscribe( // +1
      response => {
        // Guarda la información del usuario en localStorage
        this.localstorageService.setItem('currentUser', response.msg);
        alert('Bienvenido ' + response.msg.nombre);
        this.router.navigate(['/ver-libros']);
      },
      error => {
        alert('Error: ' + error.msg);
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
