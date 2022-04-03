import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,
              private route: Router) { }
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
      if(u.perfil == 1){
        this.route.navigateByUrl(`cadastrar/consultoria/${u.usuarioId}`)
      }if(u.perfil == 2){
        this.route.navigateByUrl(`cadastrar/cliente-empresa/${u.usuarioId}`)
      }
      
    }), ()=>{
      alert('Error')
    }
  }

}
