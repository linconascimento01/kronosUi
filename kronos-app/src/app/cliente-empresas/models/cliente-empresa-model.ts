import { ConsultoriaModel } from "src/app/consultorias/models/consultoria";
import { UsuarioModel } from "src/app/usuarios/models/usuario";

export interface ClienteEmpresaModel {
    clienteEmpresaId:number,
    razaoSocial:string,
    nomeComercial:string,
    cnpj:string,
    usuario:any,
    consultoria:any
}
