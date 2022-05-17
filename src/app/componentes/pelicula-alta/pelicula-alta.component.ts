import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/entidades/actor';
import { Pelicula } from 'src/app/entidades/pelicula';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public forma: FormGroup;
  public actorSeleccionado: any | undefined;
  private imageSrc: string = '';

  constructor(private fb: FormBuilder, private dbContextService: DbContextService) {
    this.forma = this.fb.group({ '': ['', [Validators.required]] });
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'fechaEstreno': ['', Validators.required],
      'tipo': ['', [Validators.required]],
      'publico': ['', [Validators.required]],
      'costo': ['', [Validators.required]],
      'recaudacion': ['', [Validators.required]],
      'descripcion': ['', []],
      'actor': ['', [Validators.required]],
      'actorHidden': ['', []],
      'fotoHidden': ['', []],
      'foto': ['', [Validators.required]]
    });
  }

  public llenarCampoActor(actorSeleccionadoJson: any) {
    this.actorSeleccionado = JSON.parse(actorSeleccionadoJson);
    this.forma.controls['actor'].setValue(this.actorSeleccionado.nombre + ' ' + this.actorSeleccionado.apellido);
    this.forma.controls['actorHidden'].setValue(actorSeleccionadoJson);
  }

  public guardarPelicula(): void {
    let pAux = this.forma.getRawValue();
    let id = 1;
    let isUniqueId = false;
    while (!isUniqueId) {
      if (!this.dbContextService.listadoPeliculasDB.some(pelicula => pelicula.id == id.toString())) {
        isUniqueId = true;
      }
      else {
        id++;
      }
    }
    let actorAux = JSON.parse(pAux.actorHidden);
    let nuevaPelicula = new Pelicula(id.toString(), pAux.nombre, pAux.tipo, pAux.fechaEstreno, pAux.publico, pAux.fotoHidden, pAux.descripcion, pAux.costo, pAux.recaudacion, actorAux);
    this.dbContextService.listadoPeliculasDB.push(nuevaPelicula);
  }

  public handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if(file == undefined) return;
    if (!file.type.match(pattern)) {
      console.log('Formato inválido');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  private _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.forma.controls['fotoHidden'].setValue(this.imageSrc);
  }
}
