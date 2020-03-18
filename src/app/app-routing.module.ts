import { VeiculosComponent } from './veiculos/veiculos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProprietariosComponent } from './proprietarios/proprietarios.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { AuthGuard } from './guards/auth.guard';
import { ProprietariosGuard } from './proprietarios/proprietarios.guard';


const routes: Routes = [
  {path: '', 
    pathMatch:'full', 
    redirectTo: '/home',
    canActivate: [AuthGuard]
  },
  {path: 'login', 
    component: LoginComponent,
    
  },
  {path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'proprietarios',
      loadChildren: () => import('./proprietarios/proprietarios.module').then(m => m.ProprietariosModule),
      canActivate: [AuthGuard],
      canActivateChild: [ProprietariosGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
