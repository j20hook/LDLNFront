import {Usuario} from "./Usuario";

export class ValoracionNegativa {
  id?: number;
  dislike?:boolean;
  video?: number;
  usuario: Usuario = new Usuario();
}
