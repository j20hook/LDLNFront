import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  crearUsuario(data: Usuario) :Observable<string> {

    return this.http.post<string>(`${this.apiUrl}/usuario/crear?XDEBUG_SESSION_START=16175`, data);

  }

}
