import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ConsultoriasModule } from './consultorias/consultorias.module';

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
    ConsultoriasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
