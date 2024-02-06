import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import Swal from "sweetalert2";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  usuario = new Usuario();
  usuarios : any = [];

  constructor(private service:GeneralService, public router: Router) {
  }

  ngOnInit() {

  }

  crearUsuario(){

    this.usuario.id_rol_usuario = 1;

    this.service.crearUsuario(this.usuario).subscribe((data :any)=>{
      console.log(data)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Usuario Registrado!',
        showConfirmButton: false,
        timer: 1000,
      })

      this.router.navigate(['/apollo/login'])

    }, (error)=> {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: '¡Algo salio mal!',
      });

    })

  }

}
