import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerLibrosComponent } from './ver-libros/ver-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ver-libros', component: VerLibrosComponent },
  { path: 'crear-libro', component: FormularioLibroComponent },
  { path: 'editar-libro/:id', component: FormularioLibroComponent },
];


