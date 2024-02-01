import {Canal} from "./Canal";

export class Video {
  id?: number;
  titulo: string = '';
  descripcion: string = '';
  url: string = '';
  etiquetas?: string[] = [];
  tipo?: string;
  fecha_publicacion? : string = ''
  fecha_creacion? : string = ''
  miniatura? : string = ''
  activo?: boolean;
  canal_nombre?:string=''
  canal?: number;
  //canal?: number;
}
