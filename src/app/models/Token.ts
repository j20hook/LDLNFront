import {Usuario} from "./Usuario";

export class Token {
  id?: number;
  api_key?: string = '';
  fecha_expedicion?: string = '';
  fecha_creacion?: string = '';
  usuario: Usuario = new Usuario();
}
