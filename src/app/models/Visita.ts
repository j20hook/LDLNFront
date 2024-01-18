import {Usuario} from "./Usuario";

export class Visita {
  id?: number;
  fecha_visita?: string = '';
  video?: number;
  usuario: Usuario = new Usuario();
  activo?: boolean;
}
