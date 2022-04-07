import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  consultoria: ConsultoriaModel={
    consultoriaId:0,
    razaoSocial:'',
    nomeComercial:'',
    cnpj:'',
    usuarios: []
  }

  consultoriaForm: FormGroup;

  constructor(
    private consultoriaService: ConsultoriaService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder
    ) { 
      this.consultoriaForm = this.formBuilder.group({
        razaoSocial:['', Validators.required],
        nomeComercial:['', Validators.required],
        cnpj:['', Validators.required],
      })
    }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['userId']
    this.usuarioService.findById(id).subscribe((usuario:UsuarioModel)=>{
      this.consultoria.usuarios.push(usuario)
    }),()=>{
      alert('ususario não cadastrado')
    }
  }

  gravar(){
      this.setValues();
      this.consultoriaService.save(this.consultoria).subscribe((ct:ConsultoriaModel)=>{
      this.route.navigateByUrl('menu-consultoria')
    }), ()=>{
      alert(`Error`)
    }
  }

  setValues(){
    this.consultoria.razaoSocial = this.consultoriaForm.get('razaoSocial')?.value;
    this.consultoria.nomeComercial = this.consultoriaForm.get('nomeComercial')?.value;
    this.consultoria.cnpj = this.consultoriaForm.get('cnpj')?.value;
  }

}
