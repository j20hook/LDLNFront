import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import Swal from "sweetalert2";
import {MatDialog} from "@angular/material/dialog";
import {RecaptchaComponent} from "../recaptcha/recaptcha.component";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  usuario = new Usuario();
  usuarios : any = [];

  etiquetas : string[] = [];

  constructor(private service:GeneralService, public router: Router , private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)

        this.etiquetas.push(desc['descripcion'])

    });
  }

  crearUsuario(){

    this.usuario.id_rol_usuario = 1;

    this.service.crearUsuario(this.usuario).subscribe((data :any)=>{

      if (data['message'] == 'Necesita un mínimo de 3 carácteres'){

        Swal.fire({
          icon: 'error',
          title: 'Oops...!',
          text: data['message'],
        });

      }else if(data['message'] == 'Usuario registrado con éxito'){

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data['message'],
          showConfirmButton: false,
          timer: 1000,
        })


      }

    }, (error)=> {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: '¡Algo salio mal!',
      });

    })

  }

  abrirRecaptcha(){

    const dialogRef = this.dialog.open(RecaptchaComponent);

    dialogRef.afterClosed().subscribe((result) => {


        this.router.navigate(['/apollo/login']);

    });




  }

}
