import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AngularSvgIconModule } from 'angular-svg-icon'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VeiculosModule } from './veiculos/veiculos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { CartoesModule } from './cartoes/cartoes.module';
import { ProprietariosGuard } from './proprietarios/proprietarios.guard';


@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    VeiculosModule,
    CartoesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    ProprietariosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
