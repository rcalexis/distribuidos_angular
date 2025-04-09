import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerLibrosComponent } from './ver-libros/ver-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { guardGuard } from './guard.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ver-libros', component: VerLibrosComponent, canActivate: [guardGuard] },
  { path: 'crear-libro', component: FormularioLibroComponent, canActivate: [guardGuard] },
  { path: 'editar-libro/:id', component: FormularioLibroComponent, canActivate: [guardGuard] },
];


