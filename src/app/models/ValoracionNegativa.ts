import { Usuario } from './Usuario';
import { Video } from './Video';

export class ValoracionNegativa {
    id?: number;
    dislike?: boolean;
    video: Video = new Video();
    usuario: Usuario = new Usuario();
}
