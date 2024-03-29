import {Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { Usuario } from '../../models/Usuario';
import { MatDialog } from "@angular/material/dialog";
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
  videos_etiquetas_canal: any;
  lista_videos_etiquetas: Video[][] = [];
  lista_mensajes: any;
  num_etiquetas: any;
  mensaje_escrito: string = "";
  pestana_canal: string = 'home';
  name:any;
  animal: any;
  chatExpandido: boolean = true;
  usuario_canal: any;

  constructor(
        private route: ActivatedRoute,
        private dataservice: GeneralService,
        private dialog: MatDialog,
        private sharedService: SharedService,
        private router: Router,
        ) {}


  toggleChat() {
    this.chatExpandido = !this.chatExpandido;
  }
  editarCanal(): void{
    this.router.navigate([`apollo/canal/${this.canal_loggeado.id}/editar`])
  }

  obtenerCanalLoggeado(){

    this.dataservice.getCanalPorUsuario(this.usuario).subscribe(
      (data:any)=> {
        this.canal_loggeado = data[0];
        this.sharedService.setCanalLoggeado(this.canal_loggeado);
        this.listar_mensaje();
      }
    )

  }


  listar_mensaje(){
      this.dataservice.listarMensaje(this.canal_loggeado, this.canal).subscribe(
        data => {
          this.lista_mensajes = data;
          console.log(this.lista_mensajes)
        }
      )

   // this.listar_mensajes_automatico();

  }

  listar_mensajes_automatico(){
    setTimeout(() => {
      this.listar_mensaje();
    }, 4000);
  }



  obtenerEtiquetasCanal(){

    this.dataservice.getEtiquetasCanal(this.canal.id).
    subscribe(
      (data) => {
        this.etiquetas = data;
        this.num_etiquetas = this.etiquetas.length;
      }
    )

  }

  obtenerVideosCanalEtiquetas(){

    this.dataservice.getVideosEtiquetasCanalId(this.canal.id).
    subscribe(
      (videosEtiqueta) => {
        this.videos_etiquetas_canal = videosEtiqueta;
      }
    )

  }

  numeroSuscriptoresCanal(){

    this.dataservice.getNumSuscriptoresCanal(this.canal.id).
    subscribe(
      (data) => {
        this.suscriptores = data;
      }
    )

  }

  obtenerVideosCanal(){

    this.dataservice.getVideosCanalId(this.canal.id).subscribe(
      (data) => {
        this.videos_id_canal = data;
      }
    )

  }

  obtenerUsuarioCanalActual(){
    this.dataservice.obtenerUsuarioPorCanal1(this.canal.id).subscribe(
      (data:any) => {
        this.usuario_canal = data[0];
        console.log(this.usuario_canal)
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
                this.sharedService.setCanal(this.canal);
                console.log(data)


                /*Metodos a cargar*/

                this.obtenerEtiquetasCanal();
                this.obtenerVideosCanalEtiquetas();
                this.numeroSuscriptoresCanal();
                this.obtenerVideosCanal();
                this.obtenerUsuarioCanalActual();
              }
            )
        }
    })

    this.usuari1.username = localStorage.getItem('username') || '';
      this.dataservice.getUsuarioByUsername(this.usuari1).
      subscribe((
        data) => {
        if(data){
          this.usuario = data;
        }

        /*Metodos a cargar*/

        this.obtenerCanalLoggeado();

      }
    )




  }


  enviarFormulario() {

    this.dataservice.EnviarMensajeBackend(this.canal_loggeado, this.canal, this.mensaje_escrito).subscribe({
      complete:()=>console.log("Mensaje enviado")
    });


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

  formatearFecha(fechaString: string): string {
    // Crear un objeto de fecha a partir de la cadena proporcionada
    const fecha = new Date(fechaString);

    // Obtener día, mes y año

    const hora = fecha.getHours();
    const minutos= fecha.getMinutes()

    // Crear la cadena de fecha formateada
    const fechaFormateada = `${hora} : ${minutos} `;

    return fechaFormateada;
  }

}
