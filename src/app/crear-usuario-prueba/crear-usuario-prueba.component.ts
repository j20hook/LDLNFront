import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {Usuario} from "../models/Usuario";

@Component({
  selector: 'app-crear-usuario-prueba',
  templateUrl: './crear-usuario-prueba.component.html',
  styleUrls: ['./crear-usuario-prueba.component.css']
})
export class CrearUsuarioPruebaComponent {

  usuario = new Usuario();

  constructor(private service:GeneralService, public router: Router) {
  }

  crearUsuario(){

    this.usuario.rol = 1;

    this.service.crearUsuario(this.usuario).subscribe(data=>{console.log(data)});


  }

}
