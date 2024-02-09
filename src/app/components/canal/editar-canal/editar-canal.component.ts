import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-canal',
    templateUrl: './editar-canal.component.html',
    styleUrls: ['./editar-canal.component.css'],
})
export class EditarCanalComponent implements OnInit {
    icon_twitter = faTwitter;
    icon_facebook = faFacebook;
    icon_instagram = faInstagram;
    nuevoCanal: any;
    etiquetas: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private router: Router
    ) {}
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const canalId = +params['id'];
            if (canalId) {
                this.dataservice.getCanalPorId(canalId).subscribe(
                    (data) => {
                        this.nuevoCanal = data;
                        console.log(this.nuevoCanal);
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );
            }
        });
        this.dataservice.getEtiquetas().subscribe((data: any) => {
            for (var desc of data) this.etiquetas.push(desc['descripcion']);
        });
    }

    editarCanal() {
        this.dataservice.editarCanal(this.nuevoCanal).subscribe(
            (response) => {
                console.log(response); // Manejo de la respuesta del backend
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Canal Editado!',
                    showConfirmButton: false,
                    timer: 1000,
                });
                this.router.navigateByUrl(`apollo/canal/${this.nuevoCanal.id}`);
            },
            (error) => {
                console.error(error); // Manejo de errores
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...!',
                    text: '¡Algo salio mal!',
                });
            }
        );
    }
}
