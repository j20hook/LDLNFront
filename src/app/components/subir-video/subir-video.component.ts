import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Tipos} from "../../models/Tipos";

@Component({
  selector: 'app-subir-video',
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})
export class SubirVideoComponent implements OnInit{

  constructor(private service:GeneralService, public router: Router) {
  }

  tiposVideo : string[] = [];
  etiquetas : string[] = [];

  ngOnInit() {

    this.service.tipoVideos().subscribe((data:any) => {

      for (var desc of data)

      this.tiposVideo.push(desc['descripcion'])

    });

    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)

        this.etiquetas.push(desc['descripcion'])

    });

  }


}
