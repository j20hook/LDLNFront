import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../models/Usuario";
import {Video} from "../models/Video";
import { Canal } from '../models/Canal';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  tipoNotificaciones() :Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/tipos/notificaciones`);

  }

  tipoVideos() :Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/tipos/videos`);

  }

  getEtiquetas() :Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/tipos/etiquetas`);

  }

  listarUsuario() :Observable<Usuario[]> {

    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);

  }

  crearUsuario(data: Usuario) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/registro`, data);

  }

  subirVideo(data: Video) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/video/crear?XDEBUG_SESSION_START=10787`, data);

  }

  login(data: Usuario) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/login_check`, data);

  }

  getVideoPorId(id_video:number):Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/video/${id_video}`);

  }

    getUsuarioByUsername(data: string): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/usuario/buscar`, data);
    }
}
