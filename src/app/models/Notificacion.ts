import {Usuario} from "./Usuario";

export class Mensaje {
  id?: bigint;
  texto: string = '';
  tipo: number;
  fecha_notificacion: string = '';
  usuario: Usuario = new Usuario();
  activo: boolean;
}
