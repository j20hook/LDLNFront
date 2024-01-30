import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Canal } from '../../models/Canal';
import {Usuario} from "../../models/Usuario";

@Component({
    selector: 'app-crear-canal',
    templateUrl: './crear-canal.component.html',
    styleUrls: ['./crear-canal.component.css'],
})
export class CrearCanalComponent implements OnInit {
    // Introducimos variables que vamos a necesitar en el componente.
    nuevoCanal = new Canal();
    usuario1 = new Usuario();
    usuario: any;
    canales: any = [];

    // Introducimos en el constructor el service y el routing
    constructor(
        private service: GeneralService,
        public router: Router
    ) {}

    // Solicitamos el usuario para sacar el id
    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.service.getUsuarioByUsername(this.usuario1).subscribe(data=>{

          this.usuario = data;
          console.log(this.usuario)

        });

    }

    // Funcion para crear canal
    crearCanal() {
        this.service.crearCanal(this.nuevoCanal);
    }
}
