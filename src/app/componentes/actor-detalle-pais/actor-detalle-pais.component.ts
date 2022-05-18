import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/entidades/pais';

@Component({
  selector: 'app-actor-detalle-pais',
  templateUrl: './actor-detalle-pais.component.html',
  styleUrls: ['./actor-detalle-pais.component.scss']
})
export class ActorDetallePaisComponent implements OnInit {

  @Input() miPais: Pais = {} as Pais;

  constructor() { }

  ngOnInit(): void {
  }

  public limpiarDetalle() {
    this.miPais = {} as Pais;
  }
}
