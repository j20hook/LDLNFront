import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-boton-suscripcion',
    templateUrl: './boton-suscripcion.component.html',
    styleUrls: ['./boton-suscripcion.component.css'],
})
export class BotonSuscripcionComponent implements OnInit {
    usuario: any;
    usuario1: any;

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
    }

    suscribirse() {}
}
