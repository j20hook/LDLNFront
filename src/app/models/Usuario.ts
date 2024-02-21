export class Usuario {
  id?: number;
  username: string = '';
  password: string = '';
  email: string = '';
  comunidad_autonoma : string = '';
  etiquetas?: string[] = [];
  id_rol_usuario?: number;
  activo?: boolean;
  foto:string = '';
}
