import { Component, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/entidades/actor';
import { Pais } from 'src/app/entidades/pais';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public forma: FormGroup;
  public paisSeleccionado: any | undefined;
  public mensajeDelForm: string = '';

  constructor(private fb: FormBuilder, private dbContextService: DbContextService) {
    this.forma = this.fb.group({ '': ['', [Validators.required]] });
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', [Validators.required]],
      'pais': ['', [Validators.required]],
      'paisHidden': ['', []],
    });
  }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  public llenarCampoPais(paisSeleccionadoJson: any) {
    let paisObjAux = JSON.parse(paisSeleccionadoJson);
    let arrayIdiomas = Object.values(paisObjAux.languages);
    this.paisSeleccionado = new Pais(paisObjAux.name.common, paisObjAux.flags.svg, paisObjAux.population, paisObjAux.region, <string[]>arrayIdiomas);
    this.forma.controls['pais'].setValue(this.paisSeleccionado.nombre);
    this.forma.controls['paisHidden'].setValue(JSON.stringify(this.paisSeleccionado));
  }

  public guardarActor(): void {
    let nuevoActorAux = this.forma.getRawValue();
    if (this.dbContextService.listadoActoresDB.some(actor => actor.email == nuevoActorAux.email)) {
      this.mensajeDelForm = "Ya existe un actor con ese mail";
    }
    else {
      let nuevoActor = new Actor(nuevoActorAux.email, nuevoActorAux.nombre, nuevoActorAux.apellido, nuevoActorAux.sexo, nuevoActorAux.edad, JSON.parse(nuevoActorAux.paisHidden));
      this.dbContextService.listadoActoresDB.push(nuevoActor);
      this.mensajeDelForm = "Guardado exitoso!";
    }
  }
}
