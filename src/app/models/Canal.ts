import {Usuario} from "./Usuario";

export class Canal{
  id?: number;
  nombre: string = '';
  apellidos?: string = '';
  nombre_canal?: string = '';
  telefono?: string = '';
  fecha_nacimiento?: string = '';
  fecha_creacion?: string = '';
  etiquetas?: string[] = [];
  usuario: Usuario = new Usuario();
  activo: boolean = true;
}
