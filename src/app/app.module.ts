import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { TablaDetalleActorComponent } from './componentes/tabla-detalle-actor/tabla-detalle-actor.component';
import { ActorDetallePeliculaComponent } from './componentes/actor-detalle-pelicula/actor-detalle-pelicula.component';
import { ActorDetallePaisComponent } from './componentes/actor-detalle-pais/actor-detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    NotFoundComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    MenuComponent,
    TablaActorComponent,
    PeliculaComponent,
    ActorComponent,
    ActorPeliculaComponent,
    DetalleActorComponent,
    TablaDetalleActorComponent,
    ActorDetallePeliculaComponent,
    ActorDetallePaisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
