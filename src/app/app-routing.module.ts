import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component:BienvenidoComponent },
  { path: 'busqueda', component:BusquedaComponent},
  { path: 'peliculas', component:PeliculaAltaComponent},
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
