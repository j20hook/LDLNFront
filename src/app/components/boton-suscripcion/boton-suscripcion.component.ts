import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { Suscripcion } from '../../models/Suscripcion';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-boton-suscripcion',
    templateUrl: './boton-suscripcion.component.html',
    styleUrls: ['./boton-suscripcion.component.css'],
})
export class BotonSuscripcionComponent implements OnInit {
    usuario: any;
    usuario1: any;
    canal: any;
    canal1: any;
    suscripcion = new Suscripcion();

    constructor(
        private service: GeneralService,
        public router: Router
    ) {}

    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
            this.usuario = data;
            console.log(this.usuario);
        });

        this.service.getCanalByName(this.canal1).subscribe((data) => {
            this.canal = data;
        });
    }

    suscribirse() {
        this.suscripcion.usuario = this.usuario;
        this.suscripcion.canal = this.canal;

        this.service.crearSuscripcion(this.suscripcion).subscribe(
            (response) => {
                console.log(response); // Manejo de la respuesta del backend
            },
            (error) => {
                console.error(error); // Manejo de errores
            }
        );
    }
}
