import {Component, OnInit} from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { Usuario } from '../../models/Usuario';
import { MatDialog} from '@angular/material/dialog';
import {ChatComponent} from "../chat/chat.component";



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
  usuario: any;
  usuari1 = new Usuario();
  suscriptores: any;
  canal_loggeado: any;
  etiquetas: any;
  videos_id_canal: any;
  videos_etiquetas_canal:any;
  lista_mensajes: any;


  constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private router: Router,
        public chat: MatDialog) {}

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

          this.usuari1.username = localStorage.getItem('username') || '';
          this.dataservice.getUsuarioByUsername(this.usuari1).subscribe((data) => {
            this.usuario = data;
            console.log(this.usuario);

            this.dataservice.getCanalPorUsuario(this.usuario).subscribe(
              data=>{
                this.canal_loggeado = data;
                console.log(this.canal_loggeado)

                this.dataservice.listarMensaje(this.canal_loggeado, this.canal).subscribe(
                  data=>{
                    this.lista_mensajes = data;
                    console.log(this.lista_mensajes)
                  }
                )

              }
            )

          });


                this.dataservice.getNumSuscriptoresCanal(canalId).subscribe(
                    (data) => {
                        this.suscriptores = data;
                        console.log(this.suscriptores);
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );

          this.dataservice.getEtiquetasCanal(canalId).subscribe(
            (data) => {
              this.etiquetas = data;
              console.log(this.etiquetas);

              for (var eti of this.etiquetas) {
                this.dataservice.getVideosEtiquetasCanalId(canalId, eti).
                subscribe(
                  (videosEtiqueta) => {
                    this.videos_etiquetas_canal = videosEtiqueta;
                    console.log(this.videos_etiquetas_canal);
                  },
                  (errorVideosEtiqueta) => {
                    console.error('Error al obtener videos por etiqueta:', errorVideosEtiqueta);
                  }
                );
              }
            },

          );

        /*  this.dataservice.enviarEtiquetas(this.etiquetas) */

                this.dataservice.getVideosCanalId(canalId).subscribe(
                    (data) => {
                        this.videos_id_canal = data;
                        console.log(this.videos_id_canal);
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );










        }
      }
    )
  }

  abrirChat(){

    const dialogRef = this.chat.open(ChatComponent);

    // Utiliza afterOpened para ejecutar acciones después de que el modal se abre
    dialogRef.afterOpened().subscribe(() => {
      console.log('Modal abierto');
      // Puedes realizar acciones adicionales aquí si es necesario
    });

  }


}
