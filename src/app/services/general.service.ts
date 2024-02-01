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

  getDatos() :Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/perfil/datos`);

  }

  listarUsuario() :Observable<Usuario[]> {

    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);

  }

  crearUsuario(data: Usuario) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/registro`, data);

  }

  subirVideo(data: Video) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/video/crear`, data);

  }

  login(data: Usuario) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/login_check`, data);

  }

  getVideoPorId(id_video:number):Observable<JSON> {

    return this.http.get<JSON>(`${this.apiUrl}/video/${id_video}`);

  }

  etiqueta_json: any;

  mandarEtiquetaQuery(etiqueta: string): Observable<Video[]>{

    let json = {
      "etiqueta": etiqueta
    };

    let body = JSON.stringify(json)

    console.log(body)
    return this.http.post<Video[]>('http://127.0.0.1:8000/api/video/poretiquetas', body);

  }

  getUsuarioByUsername(data: Usuario): Observable<JSON> {

      return this.http.post<JSON>(`${this.apiUrl}/usuario/buscar`, data);

  }

  crearCanal(data: Canal): Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/canal/crear`, data);

  }

  getVideosRecomendados(data: Usuario):Observable<JSON>{

    return this.http.post<JSON>(`${this.apiUrl}/video/poretiquetausuario`, data);

  }

}
