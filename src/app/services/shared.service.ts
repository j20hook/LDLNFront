import { Injectable } from '@angular/core';
import {Video} from "../models/Video";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  canal= new Usuario();
  canal_loggeado = new Usuario();

  constructor() {
  }

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

}
