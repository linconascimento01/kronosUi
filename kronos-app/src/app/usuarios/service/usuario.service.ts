import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  save(usuario:UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${environment.kronosAPI}/usuario`, usuario);
  }

  
}
