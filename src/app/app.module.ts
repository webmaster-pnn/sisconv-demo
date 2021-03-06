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
// ngx spinner
import { NgxSpinnerModule } from "ngx-spinner";
// ngx bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    HomeComponent,
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
    NgxSpinnerModule,
    SharedModule,
    ModalModule.forRoot()

    
  ],
  providers: [
    AuthService,
    ProprietariosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
