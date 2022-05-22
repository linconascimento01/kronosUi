import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CadastroClienteEmpresaComponent } from './cadastro-cliente-empresa/cadastro-cliente-empresa.component';
import { ClienteEmpresaComponent } from './cliente-empresa/cliente-empresa.component';
import { MenuClienteEmpresaComponent } from './menu-cliente-empresa/menu-cliente-empresa.component';
import { SolicitarConsultoriaComponent } from './solicitar-consultoria/solicitar-consultoria.component';


@NgModule({
  declarations: [
    ClienteEmpresaComponent,
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent,
    SolicitarConsultoriaComponent
  ],
  exports:[
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent,
    SolicitarConsultoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ClienteEmpresasModule { }
