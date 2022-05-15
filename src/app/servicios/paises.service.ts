import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  api: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {

  }

  public traerTodos(): Observable<any> {
    return this.http.get(this.api + 'all');
    
  }

  public traerPais(nombrePais:string): Observable<any>{
    return this.http.get(this.api +'name/' + nombrePais);
    
  }
}
