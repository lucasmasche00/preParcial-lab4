import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[] = [];
  @Output() enviarPelicula = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  recibirYEnviarPelicula(jsonPelicula: string) {
    this.enviarPelicula.emit(jsonPelicula);
  }
}
