import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/usuarios/models/usuario';
import { UsuarioService } from 'src/app/usuarios/service/usuario.service';
import { ConsultoriaModel } from '../models/consultoria';
import { ConsultoriaService } from '../service/consultoria.service';

@Component({
  selector: 'app-cadastrar-consultoria',
  templateUrl: './cadastrar-consultoria.component.html',
  styleUrls: ['./cadastrar-consultoria.component.css']
})
export class CadastrarConsultoriaComponent implements OnInit {

  constructor(
    private consultoriaService: ConsultoriaService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
    ) { }

  consultoria: ConsultoriaModel={
    consultoriaId:0,
    razaoSocial:'',
    nomeComercial:'',
    cnpj:'',
    usuarios: []
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['userId']
    this.usuarioService.findById(id).subscribe((usuario:UsuarioModel)=>{
      this.consultoria.usuarios.push(usuario)
    }),()=>{
      alert('ususario não cadastrado')
    }
  }

  gravar(consultoria:ConsultoriaModel){
    this.consultoriaService.save(consultoria).subscribe((ct:ConsultoriaModel)=>{
      alert(`consultotria ${ct.nomeComercial} cadastrada com sucesso
      consultoria id ${ct.consultoriaId}`)
    }), ()=>{
      alert(`Error`)
    }
  }

}
