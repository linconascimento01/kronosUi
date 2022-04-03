import { ConsultoriaModel } from "src/app/consultorias/models/consultoria";
import { UsuarioModel } from "src/app/usuarios/models/usuario";

export interface ClienteEmpresaModel {
    consultoriaId:number,
    razaoSocial:string,
    nomeComercial:string,
    cnpj:string,
    usuarios:any,
    consultoria:any
}
