import {Usuario} from "./Usuario";
import {Video} from "./Video"

export class Comentario{
  id?: bigint;
  texto: string = '';
  apellidos?: string = '';
  fecha_publicacion: string = '';
  video: Video = new Video();
  usuario: Usuario = new Usuario();
  activo?: boolean;
}


