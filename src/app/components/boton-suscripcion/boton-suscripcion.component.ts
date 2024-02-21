import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Suscripcion } from '../../models/Suscripcion';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/Usuario';
import { error } from '@angular/compiler-cli/src/transformers/util';
import { Canal } from '../../models/Canal';

@Component({
    selector: 'app-boton-suscripcion',
    templateUrl: './boton-suscripcion.component.html',
    styleUrls: ['./boton-suscripcion.component.css'],
})
export class BotonSuscripcionComponent implements OnInit {
    usuario: any;
    usuario1 = new Usuario();
    canal: any;
    canal1 = new Canal();
    suscripcion = new Suscripcion();
    suscripcionCheck: any;
    estado_suscripcion: boolean = false;

    constructor(
        private service: GeneralService,
        public router: Router,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
            this.usuario = data;
        });

        this.route.params.subscribe((params) => {
            const canalId = +params['id'];
            if (canalId) {
                this.service.getCanalPorId(canalId).subscribe(
                    (data) => {
                        this.canal = data;
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );
            }
        });

        this.comprobarSuscripcion();
    }

    async comprobarSuscripcion() {
        this.suscripcion.usuario = this?.usuario?.id;
        this.suscripcion.canal = this?.canal?.id;
        this.service.getSuscripcionByIdUsuario(this.suscripcion).subscribe(
            (data) => {
                this.suscripcionCheck = data;
                if (this.suscripcionCheck) {
                    this.estado_suscripcion = true;
                }
            },
            (error) => {
                console.error('no funciona', error);
            }
        );
    }

    suscribirse() {
        this.suscripcion.usuario = this.usuario.id;
        this.suscripcion.canal = this.canal.id;

        this.service.crearSuscripcion(this.suscripcion).subscribe(
            (response) => {
                this.router
                    .navigateByUrl(`/apollo/canal/${this.canal.id}`, {
                        skipLocationChange: true,
                    })
                    .then(() => {
                        this.router.navigate([this.router.url]);
                    });
            },
            (error) => {
                console.error(error); // Manejo de errores
            }
        );
    }

    activarSuscripcion() {
        this.service.activarSuscripcion(this.suscripcionCheck.id).subscribe(
            (response) => {
                this.router.navigateByUrl(`/apollo/canal/${this.canal.id}`);
            },
            (error) => {
                console.error(error); // Manejo de errores
            }
        );
    }
    desuscribirse() {
        this.service.desactivarSuscripcion(this.suscripcionCheck.id).subscribe(
            (response) => {
                this.router
                    .navigateByUrl(`/apollo/canal/${this.canal.id}`, {
                        skipLocationChange: true,
                    })
                    .then(() => {
                        this.router.navigate([this.router.url]);
                    });
            },
            (error) => {
                console.error(error); // Manejo de errores
            }
        );
    }
}
