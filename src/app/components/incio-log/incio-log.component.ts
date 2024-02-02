import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {HttpParams} from "@angular/common/http";
import {Video} from "../../models/Video";

@Component({
  selector: 'app-incio-log',
  templateUrl: './incio-log.component.html',
  styleUrls: ['./incio-log.component.css']
})
export class IncioLogComponent implements OnInit{

  etiquetas: string[] = [];
  etiqueta_elegida: any;

  videosData: any;
  videos: Video[] = [];

  constructor(private service: GeneralService) {}

  ngOnInit() {
    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)
       this.etiquetas.push(desc['descripcion'])
    });
  }

  public selectedIndex: any;

  tomar_valor(val:string){
    //Variable para recoger el valor de la etiqueta
    this.etiqueta_elegida = val;
    //Variable para mandarlo
    this.selectedIndex = val;

    //let vari = this.service.mandarEtiquetaQuery(this.etiqueta_elegida);



    this.service.mandarEtiquetaQuery(this.etiqueta_elegida).subscribe((data:any) => {

      this.videos=data;

      console.log(this.videos)

    });
  }


}
