import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Output() actorSeleccionadoEvent = new EventEmitter();
  listaActores: any[] = [];

  constructor(private dbContextService: DbContextService) {
    this.listaActores = this.dbContextService.listadoActoresDB;
  }

  ngOnInit(): void {
  }

  public enviarActor(e: any, actor: any) {
    let domActores = e.target.parentNode.parentNode.children;
    if(e.target.parentNode.nodeName == 'LI') { 
      for (let index = 0; index < domActores.length; index++) {
        domActores[index].classList.remove('selected');    
      }
      e.target.parentNode.classList.add('selected');
      let actorJson = JSON.stringify(actor);
      this.actorSeleccionadoEvent.emit(actorJson);
    }
  }
}
