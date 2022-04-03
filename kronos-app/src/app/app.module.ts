import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ConsultoriasModule } from './consultorias/consultorias.module';
import { ClienteEmpresasModule } from './cliente-empresas/cliente-empresas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    UsuariosModule,
    ConsultoriasModule,
    ClienteEmpresasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
