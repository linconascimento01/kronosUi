import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'

import { CadastroClienteEmpresaComponent } from './cadastro-cliente-empresa/cadastro-cliente-empresa.component';
import { ClienteEmpresaComponent } from './cliente-empresa/cliente-empresa.component';
import { MenuClienteEmpresaComponent } from './menu-cliente-empresa/menu-cliente-empresa.component';


@NgModule({
  declarations: [
    ClienteEmpresaComponent,
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent
  ],
  exports:[
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class ClienteEmpresasModule { }
