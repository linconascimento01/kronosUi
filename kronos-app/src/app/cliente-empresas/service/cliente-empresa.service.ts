import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ClienteEmpresaModel } from '../models/cliente-empresa-model';
import { ConsultoriaModel } from 'src/app/consultorias/models/consultoria';

@Injectable({
  providedIn: 'root'
})
export class ClienteEmpresaService {

  constructor(private http:HttpClient) { }

  save(clienteEmpresa: ClienteEmpresaModel): Observable<ClienteEmpresaModel>{
    return this.http.post<ClienteEmpresaModel>(`${environment.kronosAPI}/cliente-empresa/cadastrar`,  clienteEmpresa)
  }

  consultarConsultoria(): Observable<ConsultoriaModel[]>{
    return this.http.get<ConsultoriaModel[]>(`${environment.kronosAPI}/consultoria`)
  }
}
