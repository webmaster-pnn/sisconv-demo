// angular
import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// class
import { Proprietarios } from './../model/proprietarios';


// variaveis de producao
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosService {

  // variaveis

  private readonly API = `${environment.API}proprietarios`;


  constructor(private http: HttpClient) { }


  adicionarProprietario(p): Observable<Proprietarios>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Proprietarios>(this.API, JSON.stringify(p), httpOptions)
                    .pipe(take(1))
  }

}
