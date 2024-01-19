import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  listarUsuario() :Observable<Usuario[]> {

    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);

  }

  crearUsuario(data: Usuario) :Observable<JSON> {

    return this.http.post<JSON>(`${this.apiUrl}/usuario/crear`, data);

  }

}
