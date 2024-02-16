import { Usuario } from './Usuario';
import { Video } from './Video';

export class ValoracionPositiva {
    id?: number;
    like?: boolean;
    video: Video = new Video();
    usuario: Usuario = new Usuario();
}
