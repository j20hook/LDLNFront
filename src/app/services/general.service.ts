import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Video } from '../models/Video';
import { Canal } from '../models/Canal';
import { Suscripcion } from '../models/Suscripcion';
import { ValoracionPositiva } from '../models/ValoracionPositiva';
import { ValoracionNegativa } from '../models/ValoracionNegativa';
import {Comentario} from "../models/Comentario";
import {Visita} from "../models/Visita";


@Injectable({
    providedIn: 'root',
})
export class GeneralService {
    private apiUrl = '/api';

  private id_canal = new BehaviorSubject<any>(null);
  currentVariable = this.id_canal.asObservable();

  mandarIdCanal(idCanal: any){
    this.id_canal.next(idCanal);
  }

    constructor(private http: HttpClient) {}

    tipoNotificaciones(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/tipos/notificaciones`);
    }

    getUsuarioPorId(id_usuario:number): Observable<JSON> {
    return this.http.get<JSON>(`${this.apiUrl}/usuario/${id_usuario}`);
  }

    tipoVideos(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/tipos/videos`);
    }

    getEtiquetas(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/tipos/etiquetas`);
    }

    getDatos(id_perfil: number): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/usuario/${id_perfil}`);
    }

    listarUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);
    }

    crearUsuario(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/registro`, data);
    }

  editarPerfil(id_usuario: number, data: Usuario): Observable<JSON> {
    return this.http.put<JSON>(`${this.apiUrl}/usuario/${id_usuario}`, data);
  }

    subirVideo(data: Video): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/video/crear`, data);
    }

    login(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/login_check`, data);
    }

    listarMensaje(canal_loggeado: Usuario, canal: Usuario) :Observable<JSON> {
    let jsonCanales = {
      id_canal1: canal_loggeado.id,
      id_canal2: canal.id
    };

    return this.http.post<JSON>(`${this.apiUrl}/chat`, jsonCanales);
    }

    getVideoPorId(id_video: number): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/video/${id_video}`);
    }

    etiqueta_json: any;

    mandarEtiquetaQuery(etiqueta: string): Observable<Video[]> {
        let json = {
            etiqueta: etiqueta,
        };

        let body = JSON.stringify(json);

        return this.http.post<Video[]>(
            'http:/api/video/poretiquetas',
            body
        );
    }

    getUsuarioByUsername(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/usuario/buscar`, data);
    }


    getCanalIdByUsuario(data: Usuario): Observable<JSON> {
        let jsonCanal = {
            id: data.id,
        };
        return this.http.post<JSON>(
            `${this.apiUrl}/canal/idcanalporusuario`,
            jsonCanal
        );
    }

  // En el servicio GeneralService
  resetearContrasena(email: string): Observable<any> {
    const data = { email: email };
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }




  crearCanal(data: Canal): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/canal/crear`, data);
    }

    getCanalByName(data: Canal): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/canal/busquedanombre`,
            data
        );
    }

    crearSuscripcion(data: Suscripcion): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/suscripcion/crear`, data);
    }

    getVideosRecomendados(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/video/poretiquetausuario`,
            data
        );
    }

    getCanalPorId(id_canal: number): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/canal/${id_canal}`);
    }

  getResetPassword(id_canal: number): Observable<JSON> {
    return this.http.get<JSON>(`${this.apiUrl}/reset-password`);
  }

    getNumSuscriptoresCanal(id_canal: number): Observable<JSON> {
        let jsonCanal = {
            id: id_canal,
        };

        return this.http.post<JSON>(
            `${this.apiUrl}/canal/numsuscriptoresporcanal`,
            jsonCanal
        );
    }

    getEtiquetasCanal(id_canal: number): Observable<JSON> {
        let jsonCanal = {
            id: id_canal,
        };

        return this.http.post<JSON>(
            `${this.apiUrl}/canal/etiquetasporcanal`,
            jsonCanal
        );
    }

    getSuscripcionByIdUsuario(data: Suscripcion): Observable<JSON> {
        return this.http.post<JSON>(`${this.apiUrl}/suscripcion/buscar`, data);
    }

    desactivarSuscripcion(id: number): Observable<any> {
        return this.http.delete<any>(
            `http://127.0.0.1:8000/api/suscripcion/borrar/${id}`
        );
    }

    activarSuscripcion(id: number): Observable<any> {
        return this.http.put<any>(
            `http://127.0.0.1:8000/api/suscripcion/activar/${id}`,
            id
        );
    }

    getVideosRecomendados1(usuario: Usuario): Observable<JSON> {
        let json_id = {
            id: usuario.id,
        };

        return this.http.post<JSON>(
            `${this.apiUrl}/video/poretiquetausuario`,
            json_id
        );
    }

    getCanalPorUsuario(data: Usuario): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/canal/canalporusuario`,
            data
        );
    }

    getVideosCanalId(id_canal: number): Observable<JSON> {
        let jsonCanal = {
            id_canal: id_canal,
        };

        return this.http.post<JSON>(`${this.apiUrl}/video/porcanal`, jsonCanal);
    }

  getVideosEtiquetasCanalId(id_canal:number):Observable<JSON> {

    let jsonCanal = {
      "id": id_canal,
    };

        return this.http.post<JSON>(
            `${this.apiUrl}/video/videosEtiquetas2`,
            jsonCanal
        );
    }

    editarVideo(id_video: number, data: Video): Observable<JSON> {
        return this.http.put<JSON>(`${this.apiUrl}/video/${id_video}?XDEBUG_SESSION_START=10894`, data);
    }

  eliminarVideo(id_video: number):Observable<JSON> {

    return this.http.put<JSON>(`${this.apiUrl}/video/borrar/${ id_video }`, '')

  }

  comentariosPorVideo(data:Video):Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/comentario/video`, data)

  }

  crearComentario(data:Comentario):Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/comentario/crear`, data)

  }

  editarCanal(id_canal:number, data: Canal): Observable<JSON> {
        return this.http.put<JSON>(`${this.apiUrl}/canal/${id_canal}`, data);
    }

    darLike(data: ValoracionPositiva): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/valoracion_positiva/crear`,
            data
        );
    }

    quitarLike(data: number): Observable<any> {
        return this.http.delete<any>(
            `${this.apiUrl}/valoracion_positiva/borrar/${data}`
        );
    }

    getLikeId(data: ValoracionPositiva): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/valoracion_positiva/buscar`,
            data
        );
    }

    getLikePorVideo(data: Video): Observable<JSON> {

      return this.http.post<JSON>(`${this.apiUrl}/valoracion_positiva/porvideo`, data);

    }

    darDislike(data: ValoracionNegativa): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/valoracion_negativa/crear`,
            data
        );
    }

    quitarDislike(data: number): Observable<any> {
        return this.http.delete<any>(
            `${this.apiUrl}/valoracion_negativa/borrar/${data}`
        );
    }

    getDislikeId(data: ValoracionNegativa): Observable<JSON> {
        return this.http.post<JSON>(
            `${this.apiUrl}/valoracion_negativa/buscar`,
            data
        );
    }

  getVideosSuscritos(usuario: Usuario):Observable<JSON> {

    let jsonCanal = {
      "id": usuario.id,
    };

    return this.http.post<JSON>(`${this.apiUrl}/video/canalessuscritos`, jsonCanal );

  }

  EnviarMensajeBackend(canal_emisor: Usuario, canal_receptor: Usuario, texto: string): Observable<JSON>{
      let jsonChat = {
        "texto": texto,
        "id_canal_emisor": canal_emisor.id,
        "id_canal_receptor": canal_receptor.id
      }

    return this.http.post<JSON>(`${this.apiUrl}/chat/enviar`, jsonChat);


  }

  getSucriptoresPorIdCanal(id:any): Observable<JSON> {
    let jsonSuscriptores = {
      "id": id
    }

    return this.http.post<JSON>(`${this.apiUrl}/suscripcion/suscriptoresporcanal`, jsonSuscriptores);
  }

  getCanalesSuscritosPorUsuario(usuario_loggeado: Usuario): Observable<JSON> {
    let jsonCanalesSuscritos = {
      "id": usuario_loggeado.id
    }

    return this.http.post<JSON>(`${this.apiUrl}/suscripcion/canalessuscritosporusuario`, jsonCanalesSuscritos);
  }

  getCanalPorUsername(usuario:Usuario):Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/canal/porusername`, usuario );

  }

  crearVisita(visita: Visita): Observable<JSON> {
    return this.http.post<JSON>(`${this.apiUrl}/visita/crear`, visita);
  }

  visitasPorVideo(visita: Visita): Observable<JSON> {
    return this.http.post<JSON>(`${this.apiUrl}/visita/porvideo`, visita);
  }
  getCanalByVideoId(id: number): Observable<JSON> {
    return this.http.get<JSON>(`${this.apiUrl}/video/${id}`);
  }

  likesPorVideo(data: number): Observable<JSON> {
    return this.http.post<JSON>(
      `${this.apiUrl}/valoracion_positiva/porvideo`,
      data,
    );
  }

  notificacionesPorUsuario(data:Usuario):Observable<JSON>{

    return this.http.post<JSON>(`${this.apiUrl}/notificacion/porusuario`, data );

  }

  notificacionesNuevas(data:Usuario):Observable<JSON>{

    return this.http.post<JSON>(`${this.apiUrl}/notificacion/nuevas`, data );

  }

  quitarAlerta(data:Usuario):Observable<JSON>{

    return this.http.post<JSON>(`${this.apiUrl}/notificacion/alerta`, data );

  }

  getHistorial(data:Usuario):Observable<JSON>{

    return this.http.post<JSON>(`${this.apiUrl}/visita/historial`, data );

  }

  BusquedaVideos(texto:string): Observable<JSON> {
    let jsonBusqueda = {
      "texto": texto
    }

    return this.http.post<JSON>(`${this.apiUrl}/video/videobuscador`, jsonBusqueda);
  }

  BusquedaCanales(texto:string): Observable<JSON> {
    let jsonBusqueda = {
      "texto": texto
    }

    return this.http.post<JSON>(`${this.apiUrl}/canal/canalbuscador`, jsonBusqueda);
  }

  RegistrarBusqueda(usuario_loggeado: Usuario, texto: string): Observable<JSON> {
    let jsonHistorialBusqueda = {
      "texto": texto,
      "id": usuario_loggeado.id
    }

    return this.http.post<JSON>(`${this.apiUrl}/historial_busquedas/insertar`, jsonHistorialBusqueda);
  }

  listarBusuqeda(usuario_loggeado: Usuario): Observable<JSON> {
    let jsonHistorialBusqueda = {
      "id": usuario_loggeado.id
    }

    return this.http.post<JSON>(`${this.apiUrl}/historial_busquedas/listar`, jsonHistorialBusqueda);
  }

  videosVirales(): Observable<JSON> {
    return this.http.get<JSON>(`${this.apiUrl}/videos/topvideosvirales`);
  }



  dislikesPorVideo(data: number): Observable<JSON> {
    return this.http.post<JSON>(
      `${this.apiUrl}/valoracion_negativa/porvideo`,
      data,
    );
  }

  obtenerUsuarioPorCanal1(id_canal: number): Observable<JSON> {
    let Canal_id = {
      "id_canal": id_canal
    }

    return this.http.post<JSON>(`${this.apiUrl}/usuario/usuarioporcanal`, Canal_id);
  }

}
