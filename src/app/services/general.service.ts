import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Video } from '../models/Video';
import { Canal } from '../models/Canal';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {
    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) {}

    tipoNotificaciones(): Observable<JSON> {
        return this.http.get<JSON>(
            `${this.apiUrl}/tipos/notificaciones?XDEBUG_SESSION_START=19036`
        );
    }

    tipoVideos(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/tipos/videos`);
    }

    getEtiquetas(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/tipos/etiquetas`);
    }

    listarUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);
    }

    crearUsuario(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/registro`, data);
    }

    subirVideo(data: Video): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/video/crear?XDEBUG_SESSION_START=10101`,
            data
        );
    }

    crearCanal(data: Canal): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/canal/crear`, data);
    }

    getUsuarioById(): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/usuario/{id}`);
    }
}
