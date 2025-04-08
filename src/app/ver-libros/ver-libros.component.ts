import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LaravelService } from '../laravel.service';
import { CommonModule } from '@angular/common';
import { LaravelService } from '../services/laravel.service';
import { LocalstorageService } from '../services/localstorage.service';

interface Libro {
  id: number;
  nombre: string;
  editorial: string;
  autor: string;
  ediciones: string;
  genero: string;
  usuario_creador?: string
}

@Component({
  selector: 'app-ver-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-libros.component.html',
  styleUrl: './ver-libros.component.css'
})
export class VerLibrosComponent implements OnInit {
  libros: Libro[] = [];
  currentUser: any;

  constructor(
    private laravelService: LaravelService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.cargarLibros();
    this.currentUser = this.localstorageService.getItem('currentUser');
  }

  cargarLibros(): void {
    this.laravelService.service_Get('libros').subscribe(
      (response: any) => {
        if (response.estatus === 1) {
          this.libros = response.data.map((libro: Libro) => ({
            ...libro,
            usuario_creador: libro.usuario_creador || this.currentUser.nombre // Asigna el nombre del usuario actual si no hay uno específico
          }));
        }
      },
      error => console.error('Error al cargar libros:', error)
    );
  }
  

  editarLibro(id: number): void {
    this.router.navigate(['/editar-libro', id]);
  }

  eliminarLibro(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      this.laravelService.service_Delete('libros', id).subscribe(
        (response: any) => {
          if (response.estatus === 1) {
            this.cargarLibros();
          }
        },
        error => console.error('Error al eliminar libro:', error)
      );
    }
  }

  crearLibro(): void {
    this.router.navigate(['/crear-libro']);
  }

  cerrarSesion(): void {
    this.localstorageService.clear(); // limpia el localStorage
    this.router.navigate(['/login']); // R¿redirige al usuario
  }
}

