import { Injectable } from '@angular/core';
import { Actor } from '../entidades/actor';
import { Pais } from '../entidades/pais';
import { Pelicula } from '../entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  listadoPeliculasDB: Pelicula[];
  listadoActoresDB: Actor[];

  constructor() {
    this.listadoActoresDB = [
      new Actor('arnolds@gmail.com', 'Arnold Alois', 'Schwarzenegger', 'Masculino', 74, new Pais('United States', 'https://flagcdn.com/us.svg', 329484123, 'Americas', ['English'])),
      new Actor('heatherl@gmail.com', 'Heather', 'Langenkamp', 'Femenino', 57, new Pais('Uruguay', 'https://flagcdn.com/uy.svg', 3473727, 'Americas', ['Spanish']))
    ];
    this.listadoPeliculasDB = [
      new Pelicula('1', 'Terminator', 'Otros', '1985-04-18', '10000', 'https://es.web.img3.acsta.net/pictures/16/02/12/15/14/218373.jpg', 'The Terminator (conocida en algunos países de Hispanoamérica como El Exterminador) es una película estadounidense de ciencia ficción y acción de 1984, dirigida por James Cameron, coescrita entre Cameron, Gale Anne Hurd y William Wisher Jr. y protagonizada por Arnold Schwarzenegger, Linda Hamilton y Michael Biehn.', 'US$ 6,4 millones', 'US$ 78 371 200', this.listadoActoresDB[0]),
      new Pelicula('2', 'Back to the Future', 'Otros', '1985-12-26', '34000', 'https://m.media-amazon.com/images/I/51VLaiKIRHL._AC_.jpg', 'El adolescente Marty McFly es amigo de Doc, un científico que ha construido una máquina del tiempo. Cuando los dos prueban el artefacto, un error fortuito hace que Marty llegue a 1955, año en el que sus padres iban al instituto y todavía no se habían conocido.', 'US$ 19 000 000', 'US$ 381 109 762', {} as Actor),
      new Pelicula('3', 'A Nightmare on Elm Street', 'Terror', '1984-11-16', '22000', 'https://m.media-amazon.com/images/I/61CsXp-qnnL._AC_SL1000_.jpg', 'Varios jóvenes de una pequeña localidad tienen habitualmente pesadillas en las que son perseguidos por un hombre deformado por el fuego y que usa un guante terminado en afiladas cuchillas.', 'Menos de US$ 2 000 000', 'US$ 26 000 000', this.listadoActoresDB[1]),
      new Pelicula('4', 'The Naked Gun', 'Comedia', '1988-12-02', '18000', 'https://m.media-amazon.com/images/I/51pOTa-2APL._AC_.jpg', 'Tras infiltrarse en una insólita reunión y descubrir que el general Idi Amin no ha muerto, el teniente de policía Frank Drebin es nombrado encargado de seguridad de la Reina Isabel II de Inglaterra.', 'US$ 12 000 000', 'US$ 78 760 000', {} as Actor)
    ];
  }
}
