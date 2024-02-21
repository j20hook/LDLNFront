import { Component } from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {

  usuario = new Usuario();

  constructor(public service:GeneralService, public router:Router) {
  }

  inciarSesion(){

    this.service.login(this.usuario).subscribe({
      next: (respuesta:any) => {

        if(respuesta.token != null){

          localStorage.setItem('token' , respuesta.token);
          localStorage.setItem('username', this.usuario.username);
            this.router.navigate(['apollo/inicio_log']);

        }

      },

      error: (e) => console.error(e),

    });
  }

}
