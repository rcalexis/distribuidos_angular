import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
// import { User } from '../../app/models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: [''],
      correo_electronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      calle: ['', Validators.required],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required],
      codigo_postal: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.invalid) {
      alert('Por favor, llena todos los campos correctamente.');
      return;
    }

    const user = this.registerForm.value;

    this.userService.registerUser(user).subscribe(
      response => {
        alert(response.msg);
        this.router.navigate(['/login']); // Redirige al formulario de login después de registrar
      },
      error => {
        alert('Error: ' + error.msg);
      }
    );
  }
}
