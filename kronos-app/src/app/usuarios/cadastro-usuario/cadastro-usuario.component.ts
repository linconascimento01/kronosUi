import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroForm: FormGroup;

  usuario: UsuarioModel={
    usuarioId:0,
    nome:'',
    email:'',
    senha:'',
    perfil:0
  }
  
  constructor(private formBuilder: FormBuilder, 
              private usuarioService: UsuarioService,
              private route: Router) {
      this.cadastroForm = this.formBuilder.group({
          nome:['', Validators.required],
          email:['', Validators.required],
          senha:['', Validators.required],
          perfil:[null ,Validators.required]
      })
   }

  ngOnInit(): void {
  }

  salvar(){
    this.setValues();
    this.usuarioService.save(this.usuario).subscribe((user: UsuarioModel)=>{
      switch(user.perfil){
        case 1:{
          this.route.navigateByUrl(`cadastrar/consultoria/${user.usuarioId}`)
          break;
        }
        case 3:{
          this.route.navigateByUrl(`cadastrar/cliente-empresa/${user.usuarioId}`)
          break;
        }
      }
    })
    alert(this.usuario.perfil);
  }

  setValues(){
    this.usuario.nome = (this.cadastroForm.get('nome')?.value);
    this.usuario.email = (this.cadastroForm.get('email')?.value);
    this.usuario.senha = (this.cadastroForm.get('senha')?.value);
    this.usuario.perfil = (this.cadastroForm.get('perfil')?.value);
  }


}
