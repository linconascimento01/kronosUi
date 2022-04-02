import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  exports:[
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class UsuariosModule { }
