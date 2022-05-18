import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/entidades/actor';
import { Pelicula } from 'src/app/entidades/pelicula';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  listadoPeliculasBase: Pelicula[];
  listadoActoresBase: Actor[];
  miActorBase: Actor;
  misPeliculasDelActor: Pelicula[] = [];

  constructor(private dbContextService:DbContextService) {
    this.listadoPeliculasBase = this.dbContextService.listadoPeliculasDB;
    this.listadoActoresBase = this.dbContextService.listadoActoresDB;

    this.miActorBase = this.listadoActoresBase[0];
    this.traerPeliculasDelActor();
  }

  ngOnInit(): void {
  }

  recibirActorBase(jsonActor: string) {
    this.miActorBase = JSON.parse(jsonActor);
    this.traerPeliculasDelActor();
  }

  private traerPeliculasDelActor() {
    this.misPeliculasDelActor = this.listadoPeliculasBase.filter(p => p.actor.email == this.miActorBase.email);
  }
}
