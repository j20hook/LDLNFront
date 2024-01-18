import {Usuario} from "./Usuario";

export class Mensaje {
  id?: bigint;
  texto: string = '';
  fecha_envio: string = '';
  usuario_emisor: Usuario = new Usuario();
  usuario_receptor: Usuario = new Usuario();
  activo: boolean;
}
