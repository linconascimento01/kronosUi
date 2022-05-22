import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { UsuarioModel } from 'src/app/usuarios/models/usuario';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
    ){
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      senha:['', Validators.required]
    })
  }
  
  usuario: UsuarioModel={
    usuarioId:0,
    nome:'',
    email:'',
    senha:'',
    perfil:0
  }


  logar(){
    this.usuario.email =  this.loginForm.get('email')?.value
    this.usuario.senha =  this.loginForm.get('senha')?.value
    this.authService.autenticar(this.usuario).subscribe((user:UsuarioModel)=>{
      if(user.perfil == 1){
        this.route.navigateByUrl(`menu-consultoria`)
      }if(user.perfil == 3){
        this.route.navigateByUrl(`menu-cliente-empresa/${this.usuario.usuarioId}`)
      }
    }), ()=>{
      alert('E-mail ou senha invalido')
      this.loginForm.reset
    }
  }
  
}
