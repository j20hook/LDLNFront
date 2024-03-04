import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {HttpParams} from "@angular/common/http";
import {Video} from "../../models/Video";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {SharedService} from "../../services/shared.service";
import {Canal} from "../../models/Canal";

@Component({
  selector: 'app-incio-log',
  templateUrl: './incio-log.component.html',
  styleUrls: ['./incio-log.component.css']
})
export class IncioLogComponent implements OnInit{

  etiquetas: string[] = [];
  etiqueta_elegida: any;
  videosData: any;
  videos_por_etiqueta: Video[] = [];
  videos_suscritos: any;

  videos_usuarios: any;
  usuari1 = new Usuario()

  usuario: any;
  videos_recomendados: Video[] = [];
  top5virales: Video[] = [];
  canales_suscritos_por_usuario: Canal[] = [];
  constructor(private service: GeneralService,
              private sharedService: SharedService,
              private _route: ActivatedRoute,
              private router: Router) {}


  obtenerCanalesSuscritosDelUsuarioLoggeado(){
    this.service.getCanalesSuscritosPorUsuario(this.usuario).subscribe(
      (data: any) => {
        this.canales_suscritos_por_usuario = data;
        console.log(this.canales_suscritos_por_usuario);
      }
    )

  }

  obtenerVideosDeLosCanalesSuscritos(){
    this.service.getVideosSuscritos(this.usuario).subscribe(
      (data:any)=>{
        this.videos_suscritos = data;
      }
    )

  }

  obtenerVideosRecomendados(){
    this.service.getVideosRecomendados(this.usuario).subscribe(
      (data:any)=>{
        this.videos_recomendados = data;
      }
    )

  }

  obtenerEtiquetas(){
    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)
        this.etiquetas.push(desc['descripcion'])
    });

  }


  ngOnInit() {

    this.usuari1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuari1).subscribe((data:any) => {
      //En this.usuario se encuentra el usuario loggeado
      this.usuario = data;

      this.sharedService.setUsuarioLoggeado(this.usuario);
      this.obtenerCanalesSuscritosDelUsuarioLoggeado();
      this.obtenerVideosRecomendados();
      this.obtenerVideosDeLosCanalesSuscritos();
      this.obtenerEtiquetas();

    });


  }

  public selectedIndex: any;

  tomar_valor(val:string){
    //Variable para recoger el valor de la etiqueta
    this.etiqueta_elegida = val;
    //Variable para mandarlo
    this.selectedIndex = val;

    this.service.mandarEtiquetaQuery(this.etiqueta_elegida).subscribe((data:any) => {

      this.videos_por_etiqueta=data;
      console.log(data)

    });
  }


}
