import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Suscripcion } from '../../models/Suscripcion';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/Usuario';

@Component({
    selector: 'app-boton-suscripcion',
    templateUrl: './boton-suscripcion.component.html',
    styleUrls: ['./boton-suscripcion.component.css'],
})
export class BotonSuscripcionComponent implements OnInit {
    usuario: any;
    usuario1 = new Usuario();
    canal: any;
    canal1: any;
    suscripcion = new Suscripcion();

    constructor(
        private service: GeneralService,
        public router: Router,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
            this.usuario = data;
            console.log(this.usuario);
        });

        this.route.params.subscribe((params) => {
            const canalId = +params['id'];
            if (canalId) {
                this.service.getCanalPorId(canalId).subscribe(
                    (data) => {
                        this.canal = data;
                        console.log(this.canal);
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );
            }
        });
    }

    async suscribirse() {
        this.suscripcion.usuario = this.usuario.id;
        this.suscripcion.canal = this.canal.id;

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
