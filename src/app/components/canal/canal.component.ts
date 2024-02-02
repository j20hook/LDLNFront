import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { Canal } from '../../models/Canal';
import { Usuario } from '../../models/Usuario';
import { Suscripcion } from '../../models/Suscripcion';

@Component({
    selector: 'app-canal',
    templateUrl: './canal.component.html',
    styleUrls: ['./canal.component.css'],
})
export class CanalComponent implements OnInit {
    icon_twitter = faTwitter;
    icon_facebook = faFacebook;
    icon_instagram = faInstagram;
    canal: any;
    usuario1 = new Usuario();
    usuario: any;
    suscripcion = new Suscripcion();

    constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private router: Router
    ) {}
    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.dataservice
            .getUsuarioByUsername(this.usuario1)
            .subscribe((data) => {
                this.usuario = data;
                console.log(this.usuario);
            });

        this.route.params.subscribe((params) => {
            const canalId = +params['id'];
            if (canalId) {
                this.dataservice.getCanalPorId(canalId).subscribe(
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

        this.dataservice.crearSuscripcion(this.suscripcion).subscribe(
            (response) => {
                console.log(response); // Manejo de la respuesta del backend
            },
            (error) => {
                console.error(error); // Manejo de errores
            }
        );
    }
}
