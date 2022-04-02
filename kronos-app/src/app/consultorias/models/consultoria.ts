import { UsuarioModel } from "src/app/usuarios/models/usuario";

export interface ConsultoriaModel {
    consultoriaId:number,
    razaoSocial:string,
    nomeComercial:string,
    cnpj:string,
    usuarios:UsuarioModel[]
}
