import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LaravelService } from '../laravel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaravelService } from '../services/laravel.service';

interface Libro {
  id?: number;
  nombre: string;
  editorial: string;
  autor: string;
  ediciones: string;
  genero: string;
}

@Component({
  selector: 'app-formulario-libro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-libro.component.html',
  styleUrl: './formulario-libro.component.css'
})
export class FormularioLibroComponent implements OnInit {
  libro: Libro = { nombre: '', editorial: '', autor: '', ediciones: '', genero: '' };
  editando = false;

  constructor(
    private laravelService: LaravelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.cargarLibro(+id);
    }
  }

  cargarLibro(id: number): void {
    this.laravelService.service_Get('libros', id).subscribe(
      (response: any) => {
        if (response.estatus === 1) {
          this.libro = response.data;
        }
      },
      error => console.error('Error al cargar libro:', error)
    );
  }

  onSubmit(): void {
    if (this.editando) {
      this.actualizarLibro();
    } else {
      this.crearLibro();
    }
  }

  crearLibro(): void {
    this.laravelService.service_Post('libros', '', this.libro).subscribe(
      (response: any) => {
        if (response.estatus === 1) {
          this.router.navigate(['/ver-libros']);
        }
      },
      error => console.error('Error al crear libro:', error)
    );
  }

  actualizarLibro(): void {
    this.laravelService.service_Patch('libros', this.libro.id, this.libro).subscribe(
      (response: any) => {
        if (response.estatus === 1) {
          this.router.navigate(['/ver-libros']);
        }
      },
      error => console.error('Error al actualizar libro:', error)
    );
  }
}

