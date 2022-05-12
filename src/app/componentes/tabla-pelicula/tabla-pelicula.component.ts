import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

@Input() listadoPeliculasTabla: Pelicula[] = [];
@Output() enviarPeliculaTabla = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarId(id: string) {
    let jsonPelicula = JSON.stringify(this.listadoPeliculasTabla.find(p => p.id === id));
    this.enviarPeliculaTabla.emit(jsonPelicula);
  }

}
