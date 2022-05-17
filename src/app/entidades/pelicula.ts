import { Actor } from "./actor";

export class Pelicula {
    id: string;
    nombre: string;
    tipo: string;
    fechaEstreno: string;
    cantidadPublico: string;
    fotoPelicula: string;
    descripcion: string;
    costo: string;
    recaudacion: string;
    actor: Actor;

    constructor(id: string, nombre: string, tipo: string, fecha: string, publico: string, foto: string, descripcion: string, costo: string, recaudacion: string, actor: Actor) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo
        this.fechaEstreno = fecha;
        this.cantidadPublico = publico;
        this.fotoPelicula = foto;
        this.descripcion = descripcion;
        this.costo = costo;
        this.recaudacion = recaudacion;
        this.actor = actor;
    }
}
