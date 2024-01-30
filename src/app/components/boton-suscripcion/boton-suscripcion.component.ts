import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-boton-suscripcion',
    templateUrl: './boton-suscripcion.component.html',
    styleUrls: ['./boton-suscripcion.component.css'],
})
export class BotonSuscripcionComponent implements OnInit {
    usuario: any;

    ngOnInit() {
        this.usuario = localStorage.getItem('usuario');
    }

    suscribirse() {}
}
