import { Veiculos } from './veiculos';

export class Proprietarios {
    veiculos: Veiculos = new Veiculos();

    grad: String;
    setor: String;
    cnh: String;
    editar: String;
    
    constructor(

        public id: number,
        public nome: String,
        public nip: String,
        public modelo: String,
        public montadora: String,


    ){ 
        this.veiculos.id = id;
        this.veiculos.modelo = modelo;
        this.veiculos.montadora = montadora;
    }

    
    

}
