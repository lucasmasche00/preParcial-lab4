import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/entidades/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Input() listadoActores: Actor[] = [];
  @Output() enviarActor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  recibirYEnviarActor(jsonActor: string) {
    this.enviarActor.emit(jsonActor);
  }
}
