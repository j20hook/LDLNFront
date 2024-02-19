import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {HttpParams} from "@angular/common/http";
import {Video} from "../../models/Video";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";

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
  videos_suscritos: Video[] = [];

  videos_usuarios: any;
  usuari1 = new Usuario()

  usuario: any;
  videos_recomendados: Video[] = [];
  constructor(private service: GeneralService, private _route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)
       this.etiquetas.push(desc['descripcion'])
    });

    this.usuari1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuari1).subscribe((data:any) => {
      this.usuario = data;
      console.log(this.usuario);
      this.service.getVideosRecomendados1(this.usuario)
        .subscribe(
          data => {
            this.videos_usuarios = data;
            console.log(this.videos_usuarios);
          },
          error => {
            console.error("no funciona", error);
          }
        )

      this.service.getVideosSuscritos(this.usuario).subscribe(
        (data:any)=>{
          this.videos_suscritos = data;
          console.log(this.videos_suscritos);
        }
      )

      this.service.getVideosRecomendados(this.usuario).subscribe(
        (data:any)=>{
          this.videos_recomendados = data;
          console.log(this.videos_recomendados);
        }
      )

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

      this.videos_por_etiqueta=data;

      console.log(this.videos_por_etiqueta)

    });
  }


}
