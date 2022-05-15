import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/entidades/actor';
import { DbContextService } from 'src/app/servicios/db-context.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public forma: FormGroup;
  public actorSeleccionado: any | undefined;

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
      'foto': ['', [Validators.required]]
    });
  }

  public guardarPelicula() {
    console.log(this.forma.getRawValue());
  }

}
