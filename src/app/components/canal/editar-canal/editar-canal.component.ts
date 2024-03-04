import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import Swal from 'sweetalert2';
import {Canal} from "../../../models/Canal";

@Component({
    selector: 'app-canal',
    templateUrl: './editar-canal.component.html',
    styleUrls: ['./editar-canal.component.css'],
})
export class EditarCanalComponent implements OnInit {
    icon_twitter = faTwitter;
    icon_facebook = faFacebook;
    icon_instagram = faInstagram;
    nuevoCanal= new Canal();
    etiquetas: string[] = [];
    id_canal:string | null ;

    constructor(

        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private router: Router
    ) {
      this.id_canal = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            let canalId = +params['id'];
            if (canalId) {
                this.dataservice.getCanalPorId(canalId).subscribe(
                    (data:any) => {
                        this.nuevoCanal = data;
                        console.log(data)
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
        this.dataservice.editarCanal(Number(this.nuevoCanal.id), this.nuevoCanal).subscribe(
            (response) => {
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
