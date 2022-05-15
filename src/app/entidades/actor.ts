export class Actor {
    email: string;
    nombre: string;
    apellido: string;
    sexo: string;
    edad: number;
    pais: string;

    constructor(email: string, nombre: string, apellido: string, sexo: string, edad: number, pais: string) {
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = edad;
        this.pais = pais;
    }
}
