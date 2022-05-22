import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultoriaModel } from 'src/app/consultorias/models/consultoria';
import { SolicitarConsultoriaModel } from '../models/solicitar-consultoria-model';
import { ClienteEmpresaService } from '../service/cliente-empresa.service';

@Component({
  selector: 'app-menu-cliente-empresa',
  templateUrl: './menu-cliente-empresa.component.html',
  styleUrls: ['./menu-cliente-empresa.component.css']
})
export class MenuClienteEmpresaComponent implements OnInit {

  consultorias: ConsultoriaModel[] = [
    { consultoriaId:0,
      razaoSocial:'',
      nomeComercial:'',
      cnpj:'',
      usuarios: []
    }
  ]

  solicitarConsultoriaModel: SolicitarConsultoriaModel = {
    consultoriaId:0,
    empresaId:0
  }

  usuarioId : number = 0

  constructor(private clienteEmpresaService: ClienteEmpresaService,
              private activatedRoute: ActivatedRoute,
              private route: Router
              ) { }

  ngOnInit(): void {
    this.usuarioId = this.activatedRoute.snapshot.params['userId']
    this.clienteEmpresaService.consultarConsultoria().subscribe((consultorias:ConsultoriaModel[])=>{
      consultorias.forEach((consultoria:ConsultoriaModel)=>{
        this.consultorias.push(consultoria)
      })
    })

    console.log(`user id ${this.usuarioId}`)
  }

  solicitar(consultoriaId: number){
    this.solicitarConsultoriaModel.consultoriaId = consultoriaId
    this.solicitarConsultoriaModel.empresaId = this.usuarioId
    console.log(consultoriaId)
  }

}
