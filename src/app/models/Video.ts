export class Video {
  id?: number;
  titulo: string = '';
  descripcion: string = '';
  url: string = '';
  etiquetas?: string[] = [];
  tipo?: string;
  fecha_publicacion? : string = ''
  fecha_creacion? : string = ''
  activo?: boolean;
  canal?: number;
}
