import {Component, OnInit, Inject } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { Usuario } from '../../models/Usuario';
import { MatDialog } from "@angular/material/dialog";
import {EditarCanalComponent} from "./editar-canal/editar-canal.component";
import {SharedService} from "../../services/shared.service";
import {Video} from "../../models/Video";

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
  videos_etiquetas_canal: Video[] = [];
  lista_mensajes: any;
  mensaje_escrito: string = "";
  pestana_canal: string = 'home';
  name:any;
  animal: any;

  constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private dialog: MatDialog,
        private sharedService: SharedService
        ) {}


  editarCanal(): void{
    this.dialog.open(EditarCanalComponent),{
      width:'70%'
    }
  }


  listar_mensaje(){
      this.dataservice.listarMensaje(this.canal_loggeado, this.canal).subscribe(
        data => {
          this.lista_mensajes = data;
          console.log(this.lista_mensajes)
        }
      )
  }



  ngOnInit() {

    this.route.params.subscribe(params => {
        const canalId = +params['id'];
        if (canalId) {
          this.dataservice.getCanalPorId(canalId)
            .subscribe(
              data => {
                this.canal = data;
                console.log(this.canal)
                this.sharedService.setCanal(this.canal);
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
                this.sharedService.setCanalLoggeado(this.canal_loggeado);


                this.listar_mensaje();

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


             /*for (var eti of this.etiquetas) {
                this.dataservice.getVideosEtiquetasCanalId(canalId, eti).
                subscribe(
                  (videosEtiqueta) => {
                    this.videos_etiquetas_canal.push(videosEtiqueta)
                    console.log(this.videos_etiquetas_canal);

                  }

              )
              }*/
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



  enviarFormulario() {
    console.log(this.mensaje_escrito);

    this.dataservice.EnviarMensajeBackend(this.canal_loggeado, this.canal, this.mensaje_escrito).subscribe({
      complete:()=>console.log("Mensaje enviado")});


    setTimeout(() => {
      this.listar_mensaje();
    }, 250);

  }

  abrirHome(){
    this.pestana_canal = 'home';
  }
  abrirVideos(){
    this.pestana_canal = 'videos';
  }

  abrirSuscriptores(){
    this.pestana_canal = 'suscriptores';
  }
  abrirData(){
    this.pestana_canal = 'data';
  }

}
