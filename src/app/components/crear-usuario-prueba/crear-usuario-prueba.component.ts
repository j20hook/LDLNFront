import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-crear-usuario-prueba',
  templateUrl: './crear-usuario-prueba.component.html',
  styleUrls: ['./crear-usuario-prueba.component.css']
})
export class CrearUsuarioPruebaComponent implements OnInit{

  usuario = new Usuario();
  usuarios : any = [];
  mensaje: string | undefined;

  constructor(private service:GeneralService, public router: Router) {
  }

  ngOnInit() {

    this.service.listarUsuario().subscribe(data => {

      this.usuarios = data

    });

  }

  crearUsuario(){

    this.usuario.id_rol_usuario = 1;

    this.service.crearUsuario(this.usuario).subscribe((data :any)=>{
      console.log(data)
      if (data['message'] == 'Usuario creado'){

        window.location.reload()

      }

      this.mensaje = data['message'] || 'Mensaje no disponible';

    });


  }

}
