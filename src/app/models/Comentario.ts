import {Usuario} from "./Usuario";

export class Canal{
  id?: bigint;
  texto: string = '';
  apellidos?: string = '';
  fecha_publicacion: string = '';
  video: Video = new Video();
  usuario: Usuario = new Usuario();
  activo: boolean;
}


