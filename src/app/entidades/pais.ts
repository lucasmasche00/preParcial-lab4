export class Pais {
    nombre: string;
    fotoBandera: string;
    poblacion: number;
    region: string;
    idiomas: string[];

    constructor(nombre: string, fotoBandera: string, poblacion: number, region: string, idiomas: string[]) {
        this.nombre = nombre;
        this.fotoBandera = fotoBandera;
        this.poblacion = poblacion;
        this.region = region;
        this.idiomas = idiomas;
    }
}
