import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculasBase: Pelicula[];
  miPeliculaBase: Pelicula;

  constructor(private dbContextService:DbContextService) {
    this.listadoPeliculasBase = this.dbContextService.listadoPeliculasDB;

    this.miPeliculaBase = this.listadoPeliculasBase[0];
  }

  ngOnInit(): void {
  }

  recibirPeliculaBase(jsonPelicula: string) {
    this.miPeliculaBase = JSON.parse(jsonPelicula);
  }

}
