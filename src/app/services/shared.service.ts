import { Injectable } from '@angular/core';
import {Video} from "../models/Video";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  canal= new Usuario();
  canal_loggeado = new Usuario();
  usuario_loggeado = new Usuario();
  busqueda: string = '';

  constructor() {}

  /*Canal por URL*/
  setCanal(data: Usuario){
    this.canal=data;
  }

  getCanal(){
    return this.canal;
  }

  /*Canal loggeadoL*/
  setCanalLoggeado(data: Usuario){
    this.canal_loggeado=data;
  }

  getCanalLoggeado(){
    return this.canal_loggeado;
  }

  /*Usuario loggeado*/
  setUsuarioLoggeado(data: Usuario){
    this.usuario_loggeado=data;
  }

  getUsuarioLoggeado(){
    return this.usuario_loggeado;
  }


  /*Búsqueda*/
  setBusqueda(data: string){
    this.busqueda=data;
    console.log(this.busqueda)
  }

  getBusqueda(){
    return this.busqueda;
  }

}
