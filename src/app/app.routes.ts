import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { VerLibrosComponent } from './ver-libros/ver-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
// import { LibrosComponent } from './libros/libros.component';
// import { GenerosComponent } from './generos/generos.component';

export const routes: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ver-libros', component: VerLibrosComponent },
  { path: 'crear-libro', component: FormularioLibroComponent },
  { path: 'editar-libro/:id', component: FormularioLibroComponent },
];


