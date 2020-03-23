// angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { take, map, timeout } from 'rxjs/operators';

// class
import { Proprietarios } from './../model/proprietarios';


// variaveis de producao
import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ProprietariosService {

  // variaveis

  private readonly API = `${environment.API}proprietarios`;




  constructor(private http: HttpClient) { }



  adicionarProprietario(p): Observable<Proprietarios> {

    return this.http.post<Proprietarios>(this.API, JSON.stringify(p), httpOptions)
      .pipe(take(1))
  }

   atualizarProprietario( p ){
    return this.http.put<Proprietarios>(`${this.API}/${p.id}`, p).pipe(take(1))
  }

  listarProprietario(): Observable<any> {
    return this.http.get(this.API, httpOptions).pipe(
      map(this.extractData));
  }
  ultimoId(): Observable<Proprietarios[]>{
    
    return this.http.get<Proprietarios[]>(this.API);
     

      
  }

  listarProprietarioId(id) {
    return this.http.get<Proprietarios>(`${this.API}/${id}`).pipe(take(1));
  }

  salvarProprietario( proprietario ){

  }










  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }


}
