import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { CadastrarConsultoriaComponent } from './cadastrar-consultoria/cadastrar-consultoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ConsultoriaComponent,
    CadastrarConsultoriaComponent
  ],
  exports:[
    CadastrarConsultoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ConsultoriasModule { }
