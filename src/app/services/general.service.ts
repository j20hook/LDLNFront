import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  crearUsuario(data: Usuario): Observable<string> {

    console.log('Datos enviados al backend:', data);
    return this.http.get<string>(`${this.apiUrl}/usuario/crear`, data);

  }

}
