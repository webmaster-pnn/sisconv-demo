import { Proprietarios } from './proprietarios';

export class Veiculos {
    p:Proprietarios;
    

    constructor(
    public id: number,
    public modelo: String,
    public montadora: String,
    public ano: number,
    public placa: String,
    public chassi: String,
    public cor: String,
    public nome: String,
    public nip: String,
    public grad: String,
    public setor: String,
    public cnh: String,
    public editar: String
    ){
        this.p = new Proprietarios(id, nome, nip, grad, setor, cnh, editar);
        
    }

}
