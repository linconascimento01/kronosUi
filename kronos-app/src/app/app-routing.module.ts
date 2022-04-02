import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarConsultoriaComponent } from './consultorias/cadastrar-consultoria/cadastrar-consultoria.component';
import { MenuConsultoriaComponent } from './consultorias/menu-consultoria/menu-consultoria.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {path:'usuario', component: UsuarioComponent},
  {path:'cadastrar/consultoria/:userId', component: CadastrarConsultoriaComponent},
  {path:'menu-consultoria', component: MenuConsultoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
