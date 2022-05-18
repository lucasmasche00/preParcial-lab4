import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/entidades/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() miActor: Actor = {} as Actor;

  constructor() { }

  ngOnInit(): void {
  }

  public limpiarDetalle() {
    this.miActor = {} as Actor;
  }
}
