import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Proprietarios } from '../model/proprietarios';
import { ProprietariosService } from '../service/proprietarios.service';
import { SetorService } from '../service/setor.service';
import { PostoService } from '../service/posto.service';
import { Posto } from '../model/posto';
import { Setor } from '../model/setor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosResolverGuard implements Resolve<Proprietarios> {

  constructor( 
    private proprietarioService: ProprietariosService,
    private postoService: PostoService,
    private setorService: SetorService
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Proprietarios | Observable<Proprietarios> {
    if(route.params && route.params['id']){
      return this.proprietarioService.listarProprietarioId(route.params['id']);
      
    }

    return new Proprietarios();
  }
 
 
        
}
