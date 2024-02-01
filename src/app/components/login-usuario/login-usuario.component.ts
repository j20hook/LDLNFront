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

    this.service.login(this.usuario).subscribe(data=>{

      localStorage.setItem('token', data.toString())

      this.service.getUsuarioByUsername(this.usuario).subscribe((data:any)=>{

        localStorage.setItem('username', data['username'])
        localStorage.setItem('id_usuario', data['id'])

      })

      this.router.navigate(['/apollo/inicio_log'])

    })

  }

}
