import {Usuario} from "./Usuario";
import {Video} from "./Video"

export class Comentario{
  id?: bigint;
  texto: string = '';
  apellidos?: string = '';
  fecha_publicacion: string = '';
  id_video?: number;
  id_usuario?: number;
  activo?: boolean;
}


