import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {GeneralService} from "../../services/general.service";
import {Video} from "../../models/Video";
import {Canal} from "../../models/Canal";



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{

  busqueda: string = '';
  lista_busqueda_video: any;
  lista_busqueda_canales: any;

  constructor(private sharedService: SharedService,
              private dataService: GeneralService) {
  }

  traerBusqueda(){
    this.busqueda = this.sharedService.getBusqueda();
  }

  busquedaCanales(){

    this.dataService.BusquedaCanales(this.busqueda).subscribe(
      data=>{
        this.lista_busqueda_canales = data;
      }
    )

  }

  busquedaVideos(){

    this.dataService.BusquedaVideos(this.busqueda).subscribe(
      data=>{
        this.lista_busqueda_video = data;
      }
    )

  }
  ngOnInit() {

    this.traerBusqueda();
    this.busquedaVideos();
    this.busquedaCanales();


  }

}
