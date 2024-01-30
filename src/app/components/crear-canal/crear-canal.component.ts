import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Canal } from '../../models/Canal';

@Component({
    selector: 'app-crear-canal',
    templateUrl: './crear-canal.component.html',
    styleUrls: ['./crear-canal.component.css'],
})
export class CrearCanalComponent implements OnInit {
    // Introducimos variables que vamos a necesitar en el componente.
    nuevoCanal = new Canal();
    username: any;
    usuario: any;
    canales: any = [];

    // Introducimos en el constructor el service y el routing
    constructor(
        private service: GeneralService,
        public router: Router
    ) {}

    // Solicitamos el usuario para sacar el id
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.usuario = this.service.getUsuarioByUsername(this.username);

        console.log(this.usuario);
    }

    // Funcion para crear canal
    crearCanal() {
        this.service.crearCanal(this.nuevoCanal);
    }
}
