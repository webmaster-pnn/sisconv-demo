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
    state: RouterStateSnapshot): Observable<boolean | boolean) {
      if(this.authService.getAuth()){
        return true;
      }
      console.log('falso');
      this.router.navigate(['/login']);
      return false;
  }
  
}
