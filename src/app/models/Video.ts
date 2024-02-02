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
  nombre_canal?:string=''
  id_canal?: number;
  canal = new Canal();
  //canal?: number;
}
