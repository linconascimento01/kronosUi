import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteEmpresaModel } from '../models/cliente-empresa-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteEmpresaService {

  constructor(private http:HttpClient) { }

  save(clienteEmpresa: ClienteEmpresaModel): Observable<ClienteEmpresaModel>{
    return this.http.post<ClienteEmpresaModel>(`${environment.kronosAPI}/cliente-empresa/cadastrar`,  clienteEmpresa)
  }
}
