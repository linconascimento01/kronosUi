import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'

import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { CadastrarConsultoriaComponent } from './cadastrar-consultoria/cadastrar-consultoria.component';
import { MenuConsultoriaComponent } from './menu-consultoria/menu-consultoria.component';


@NgModule({
  declarations: [
    ConsultoriaComponent,
    CadastrarConsultoriaComponent,
    MenuConsultoriaComponent
  ],
  exports:[
    CadastrarConsultoriaComponent,
    MenuConsultoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class ConsultoriasModule { }
