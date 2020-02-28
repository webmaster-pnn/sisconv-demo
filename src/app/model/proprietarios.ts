import { Veiculos } from './veiculos';

export class Proprietarios {
    
    constructor(
    public id: number,
    public nome: String,
    public nip: String,
    public grad: String,
    public setor: String,
    public cnh: String,
    public cartao: number,
    public editar: String
    ){}

}
