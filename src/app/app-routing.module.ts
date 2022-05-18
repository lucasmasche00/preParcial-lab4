import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  {
    path: 'peliculas', component: PeliculaComponent, children: [
      { path: 'alta', component: PeliculaAltaComponent }
    ]
  },
  {
    path: 'actor', component: ActorComponent, children: [
      { path: 'actorpelicula', component: ActorPeliculaComponent }
    ]
  },
  { path: 'alta-actores', component: ActorAltaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
