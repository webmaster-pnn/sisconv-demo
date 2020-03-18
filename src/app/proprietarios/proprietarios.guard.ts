import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {
      
      // console.log(state.url.split('/').splice(1));
      // let t: Array<String> = state.url.split('/').splice(1);
      
      // console.log(t.map( v => console.log(v.toString())));
        return true;
    
    }
  
}
