import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionadoEvent = new EventEmitter();
  listaPaises: any[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.traerTodos().subscribe(
      paises => {
        this.listaPaises = paises.splice(0, 8);
      });
  }

  public enviarPais(e: any, pais: any) {
    let domPaises = e.target.parentNode.parentNode.children;
    if(e.target.parentNode.nodeName == 'LI') { 
      for (let index = 0; index < domPaises.length; index++) {
        domPaises[index].classList.remove('selected');    
      }
      e.target.parentNode.classList.add('selected');
      let paisJson = JSON.stringify(pais);
      this.paisSeleccionadoEvent.emit(paisJson);
    }
  }
}
