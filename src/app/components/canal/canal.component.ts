import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { Canal } from '../../models/Canal';
import { Usuario } from '../../models/Usuario';
import { Suscripcion } from '../../models/Suscripcion';
import { ErrorcuatrocientoscuatroComponent } from '../errorcuatrocientoscuatro/errorcuatrocientoscuatro.component';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  icon_twitter = faTwitter;
  icon_facebook = faFacebook;
  icon_instagram = faInstagram;
  canal: any;
  suscriptores: any;
  etiquetas: any;
  videos_id_canal: any;

    constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private router: Router
    ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
        const canalId = +params['id'];
        if (canalId) {
          this.dataservice.getCanalPorId(canalId)
            .subscribe(
              data => {
                this.canal = data;
                console.log(this.canal)
              },
              error => {
                console.error("no funciona", error);
              }
            )

          this.dataservice.getNumSuscriptoresCanal(canalId)
            .subscribe(
              data => {
                this.suscriptores = data;
                console.log(this.suscriptores)
              },
              error => {
                console.error("no funciona", error);
              }
            )

          this.dataservice.getEtiquetasCanal(canalId)
            .subscribe(
              data => {
                this.etiquetas = data;
                console.log(this.etiquetas)
              },
              error => {
                console.error("no funciona", error);
              }
            )

          this.dataservice.getVideoPorId(canalId)
            .subscribe(
              data => {
                this.videos_id_canal = data;
                console.log(this.videos_id_canal)
              },
              error => {
                console.error("no funciona", error);
              }
            )


        }
    }

    )
  }
}
