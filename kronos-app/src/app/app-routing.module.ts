import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteEmpresaComponent } from './cliente-empresas/cadastro-cliente-empresa/cadastro-cliente-empresa.component';
import { MenuClienteEmpresaComponent } from './cliente-empresas/menu-cliente-empresa/menu-cliente-empresa.component';
import { CadastrarConsultoriaComponent } from './consultorias/cadastrar-consultoria/cadastrar-consultoria.component';
import { MenuConsultoriaComponent } from './consultorias/menu-consultoria/menu-consultoria.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {path:'usuario', component: UsuarioComponent},
  {path:'cadastrar/consultoria/:userId', component: CadastrarConsultoriaComponent},
  {path:'cadastrar/cliente-empresa/:userId', component: CadastroClienteEmpresaComponent},
  {path:'menu-consultoria', component: MenuConsultoriaComponent},
  {path:'menu-cliente-empresa', component: MenuClienteEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
