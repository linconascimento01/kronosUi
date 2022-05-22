import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from 'src/app/usuarios/service/usuario.service';
import { ClienteEmpresaModel } from '../models/cliente-empresa-model';
import { UsuarioModel } from 'src/app/usuarios/models/usuario';
import { ClienteEmpresaService } from '../service/cliente-empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente-empresa',
  templateUrl: './cadastro-cliente-empresa.component.html',
  styleUrls: ['./cadastro-cliente-empresa.component.css']
})
export class CadastroClienteEmpresaComponent implements OnInit {

  clienteEmpresa: ClienteEmpresaModel={
    clienteEmpresaId:0,
    razaoSocial:'',
    nomeComercial:'',
    cnpj:'',
    usuario: {},
    consultoria: {}
  }

  usuarioId : number = 0

  clienteForm:FormGroup;
  constructor(
    private clienteEmpresaService: ClienteEmpresaService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
      this.clienteForm = this.formBuilder.group({
        razaoSocial:['',Validators.required],
        nomeComercial:['',Validators.required],
        cnpj:['',Validators.required],
    })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['userId']
    this.usuarioId = id
    this.usuarioService.findById(id).subscribe((user:UsuarioModel)=>{
      console.log('user found '+ user.nome);
      console.log('user ID '+ user.usuarioId);
      this.clienteEmpresa.usuario = user;
    }), ()=>{
      console.log('usuario não cadastrado')
      alert('usuario não cadastrado');
    }
  }

  gravar(){
      this.setValues()
      this.clienteEmpresaService.save(this.clienteEmpresa).subscribe((cli:ClienteEmpresaModel)=>{
      this.route.navigateByUrl(`menu-cliente-empresa/${this.usuarioId}`)
    }), ()=>{
      alert(`Error`)
    }
  }

  setValues(){
    this.clienteEmpresa.razaoSocial = this.clienteForm.get('razaoSocial')?.value;
    this.clienteEmpresa.nomeComercial = this.clienteForm.get('nomeComercial')?.value;
    this.clienteEmpresa.cnpj = this.clienteForm.get('cnpj')?.value;
  }


}
