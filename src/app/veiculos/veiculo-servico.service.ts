import { Veiculos } from './../model/veiculos';
import { Proprietarios } from './../model/proprietarios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoServicoService {
 proprietarios: Proprietarios[] = [
  new Proprietarios(1, 'carlos', '16115597','passat', 'vw')

 ];
 public getProprietarios(){
   return new Proprietarios(1, 'carlos', '16115597','passat', 'vw');
 }
  constructor() { }


}
