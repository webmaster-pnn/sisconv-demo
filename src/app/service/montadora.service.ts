// 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// classes
import { Montadora } from '../model/montadora';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MontadoraService {
  private readonly API = `${environment.API}montadora`;


  constructor(private http: HttpClient) { }


  listarMontadora(): Observable<Montadora[]> {
    return this.http.get<Montadora[]>(this.API).pipe( take(1));
  }
}
