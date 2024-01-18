import {Usuario} from "./Usuario";

export class ValoracionPositiva {
  id?: number;
  like?:boolean;
  video?: number;
  usuario: Usuario = new Usuario();
}
