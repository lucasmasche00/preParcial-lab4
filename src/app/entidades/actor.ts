import { Pais } from "./pais";

export class Actor {
    email: string;
    nombre: string;
    apellido: string;
    sexo: string;
    edad: number;
    pais: Pais;

    constructor(email: string, nombre: string, apellido: string, sexo: string, edad: number, pais: Pais) {
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = edad;
        this.pais = pais;
    }
}
