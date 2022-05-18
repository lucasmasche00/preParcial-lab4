import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() miPelicula: Pelicula = {} as Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  public limpiarDetalle() {
    this.miPelicula = {} as Pelicula;
  }
}
