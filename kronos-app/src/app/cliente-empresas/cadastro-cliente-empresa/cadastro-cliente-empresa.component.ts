import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from 'src/app/usuarios/service/usuario.service';
import { ClienteEmpresaModel } from '../models/cliente-empresa-model';
import { UsuarioModel } from 'src/app/usuarios/models/usuario';
import { ClienteEmpresaService } from '../service/cliente-empresa.service';

@Component({
  selector: 'app-cadastro-cliente-empresa',
  templateUrl: './cadastro-cliente-empresa.component.html',
  styleUrls: ['./cadastro-cliente-empresa.component.css']
})
export class CadastroClienteEmpresaComponent implements OnInit {

  constructor(
    private clienteEmpresaService: ClienteEmpresaService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  clienteEmpresa: ClienteEmpresaModel={
    consultoriaId:0,
    razaoSocial:'',
    nomeComercial:'',
    cnpj:'',
    usuario: {},
    consultoria: {}
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['userId']
    this.usuarioService.findById(id).subscribe((user:UsuarioModel)=>{
      console.log('user found '+ user.nome);
      console.log('user ID '+ user.usuarioId);
      this.clienteEmpresa.usuario = user;
    }), ()=>{
      console.log('usuario não cadastrado')
      alert('usuario não cadastrado');
    }
  }

  gravar(clienteEmpresa:ClienteEmpresaModel){
      this.clienteEmpresaService.save(clienteEmpresa).subscribe((cli:ClienteEmpresaModel)=>{
      this.route.navigateByUrl('menu-cliente-empresa')
    }), ()=>{
      alert(`Error`)
    }
  }

}
