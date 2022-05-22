import { Component, OnInit } from '@angular/core';
import { ConsultoriaModel } from 'src/app/consultorias/models/consultoria';
import { ClienteEmpresaService } from '../service/cliente-empresa.service';

@Component({
  selector: 'app-solicitar-consultoria',
  templateUrl: './solicitar-consultoria.component.html',
  styleUrls: ['./solicitar-consultoria.component.css']
})
export class SolicitarConsultoriaComponent implements OnInit {

  consultoria: ConsultoriaModel[] = [
    { consultoriaId:0,
      razaoSocial:'',
      nomeComercial:'',
      cnpj:'',
      usuarios: []
    }
  ]
 

  constructor(private clienteEmpresaService: ClienteEmpresaService) { }

  ngOnInit(): void {
    this.clienteEmpresaService.consultarConsultoria().subscribe((consultorias:ConsultoriaModel[])=>{
      consultorias.forEach( (consultoria:ConsultoriaModel)=>{
        this.consultoria.push(consultoria)
      })
    })

    console.log(this.consultoria)
  }

  solicitar(id: number){
    
  }


}
