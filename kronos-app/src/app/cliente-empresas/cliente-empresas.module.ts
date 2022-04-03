import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteEmpresaComponent } from './cliente-empresa/cliente-empresa.component';
import { MenuClienteEmpresaComponent } from './menu-cliente-empresa/menu-cliente-empresa.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroClienteEmpresaComponent } from './cadastro-cliente-empresa/cadastro-cliente-empresa.component';



@NgModule({
  declarations: [
    ClienteEmpresaComponent,
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent
  ],
  exports:[
    ClienteEmpresaComponent,
    MenuClienteEmpresaComponent,
    CadastroClienteEmpresaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class ClienteEmpresasModule { }
