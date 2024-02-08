import { Canal } from './Canal';
import { Usuario } from './Usuario';

export class Suscripcion {
    id?: number;
    fecha_suscripcion?: string = '';
    activo?: boolean;
    canal?: Canal;
    usuario?: Usuario;
}
