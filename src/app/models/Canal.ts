import {Usuario} from "./Usuario";

export class Canal{
  id?: bigint;
  nombre: string = '';
  apellidos?: string = '';
  nombre_canal?: string = '';
  telefono?: string = '';
  fecha_nacimiento?: string = '';
  fecha_creacion?: string = '';
  etiquetas?: number;
  usuario: Usuario = new Usuario();
  activo: boolean = true;
}
