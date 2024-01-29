import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Video} from "../../models/Video";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

  video = new Video();

  constructor(private service: GeneralService, public router: Router) {
  }

  ngOnInit() {

    localStorage.setItem('id_video', '2')

      this.service.getVideoPorId(Number(localStorage.getItem('id_video'))).subscribe((data:any)=>{

        this.video.id = data['id'];
        this.video.titulo = data['titulo'];
        this.video.descripcion = data['descripcion'];
        this.video.url = data['url'];
        this.video.tipo = data['tipoVideo']['descripcion'];
        this.video.fecha_publicacion = data['fechaPublicacion'];
        this.video.fecha_creacion = data['fechaCreacion'];
        this.video.canal = data['canal'];

        this.video.etiquetas = data['etiquetas'];

    })

    console.log(this.video)

  }

}
