import {Component, Inject, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Video} from "../../models/Video";
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from "rxjs";
import {Usuario} from "../../models/Usuario";


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  usuario = new Usuario();
  video = new Video();
  id_video: string | null;

  constructor(private service: GeneralService, public router: Router, public _route: ActivatedRoute) {

    this.id_video = this._route.snapshot.paramMap.get('id');

  }

  ngOnInit() {

    this.usuario.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuario).subscribe(data=>{

      console.log(data)

    });

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.service.getVideoPorId(Number(this.id_video)).subscribe((data: any) => {

      this.video.id = data['id'];
      this.video.titulo = data['titulo'];
      this.video.descripcion = data['descripcion'];
      this.video.url = "https://www.youtube.com/embed/" + obtenerIdDeVideo(data['url']) || '';
      this.video.tipo = data['tipoVideo']['descripcion'];
      this.video.fecha_publicacion = data['fechaPublicacion'];
      this.video.fecha_creacion = data['fechaCreacion'];
      this.video.canal = data['canal'];
      this.video.etiquetas = data['etiquetas'];

    })

    console.log(this.video)

  }


  protected readonly obtenerIdDeVideo = obtenerIdDeVideo;
}

function obtenerIdDeVideo(url: string): string | null {
  // Patrón de expresión regular para buscar el identificador del video en la URL de YouTube
  const patron = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Intenta hacer coincidir el patrón en la URL proporcionada
  const coincidencias = url.match(patron);

  // Si hay coincidencias, devuelve el identificador del video, de lo contrario, devuelve null
  return coincidencias ? coincidencias[1] : null;
}
