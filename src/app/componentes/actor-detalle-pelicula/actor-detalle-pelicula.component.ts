import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-actor-detalle-pelicula',
  templateUrl: './actor-detalle-pelicula.component.html',
  styleUrls: ['./actor-detalle-pelicula.component.scss']
})
export class ActorDetallePeliculaComponent implements OnInit {

  @Input() misPeliculas: Array<Pelicula> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public limpiarDetalle() {
    this.misPeliculas = [];
  }
}
