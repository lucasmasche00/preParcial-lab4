import { Component, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public forma: FormGroup;
  public paisSeleccionado: any | undefined;

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
    this.paisSeleccionado = JSON.parse(paisSeleccionadoJson);
    this.forma.controls['pais'].setValue(this.paisSeleccionado.name.common);
  }

  public guardarActor(): void {
    let nuevoActor = this.forma.getRawValue();
    if (this.dbContextService.listadoActoresDB.some(actor => actor.email == nuevoActor.email)) {
      return console.log("Ya existe un actor con ese mail");
    }
    else {
      this.dbContextService.listadoActoresDB.push(this.forma.getRawValue());
    }
  }
}
