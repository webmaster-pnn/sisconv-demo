import { Veiculos } from './../model/veiculos';
import { Proprietarios } from './../model/proprietarios';
import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoServicoService {



  constructor(private http: HttpClient) { }

   
  
}
