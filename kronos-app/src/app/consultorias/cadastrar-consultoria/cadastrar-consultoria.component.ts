import { Component, OnInit } from '@angular/core';
import { ConsultoriaModel } from '../models/consultoria';
import { ConsultoriaService } from '../service/consultoria.service';

@Component({
  selector: 'app-cadastrar-consultoria',
  templateUrl: './cadastrar-consultoria.component.html',
  styleUrls: ['./cadastrar-consultoria.component.css']
})
export class CadastrarConsultoriaComponent implements OnInit {

  constructor(private consultoriaService: ConsultoriaService) { }

  consultoria: ConsultoriaModel={
    consultoriaId:0,
    razaoSocial:'',
    nomeComercial:'',
    cnpj:'',
    usuarios: [
      {
        "usuarioId": 35,
        "nome": "chorão",
        "email": "chorao@1235",
        "senha": "12354",
        "perfil": 1
    }
    ]
  }

  ngOnInit(): void {
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
