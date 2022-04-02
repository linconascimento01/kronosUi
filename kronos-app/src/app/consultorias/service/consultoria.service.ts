import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultoriaModel } from '../models/consultoria';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultoriaService {

  constructor(private http:HttpClient) { }

  save(consultoria:ConsultoriaModel): Observable<ConsultoriaModel>{
    return this.http.post<ConsultoriaModel>(`${environment.kronosAPI}/consultoria/cadastrar`, consultoria)
  }
}
