import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/entidades/actor';

@Component({
  selector: 'app-tabla-detalle-actor',
  templateUrl: './tabla-detalle-actor.component.html',
  styleUrls: ['./tabla-detalle-actor.component.scss']
})
export class TablaDetalleActorComponent implements OnInit {

  @Input() listadoActoresTabla: Actor[] = [];
  @Output() enviarActorTabla = new EventEmitter();
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    enviarEmail(email: string) {
      let jsonActor = JSON.stringify(this.listadoActoresTabla.find(p => p.email === email));
      this.enviarActorTabla.emit(jsonActor);
    }
  
}
