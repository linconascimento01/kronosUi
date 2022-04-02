import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  usuario: UsuarioModel={
    usuarioId:0,
    nome:'',
    email:'',
    senha:'',
    perfil:0
  }

  ngOnInit(): void {
  }

  gravar(usuario:UsuarioModel){
    this.usuarioService.save(usuario).subscribe((u:UsuarioModel)=>{
      alert(`usuario id: ${u.usuarioId}, nome: ${u.nome}`)
    }), ()=>{
      alert('Error')
    }
  }

}
