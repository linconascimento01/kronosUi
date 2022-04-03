import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../usuarios/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticar(usuario:UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${environment.kronosAPI}/logar`, usuario)
  }
}
