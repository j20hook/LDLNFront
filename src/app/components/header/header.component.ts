import {Component, OnInit} from '@angular/core';
import {faBell, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {GeneralService} from "../../services/general.service";
import {Usuario} from "../../models/Usuario";
import {Canal} from "../../models/Canal";
import {MatDialog} from "@angular/material/dialog";
import {EditarCanalComponent} from "../canal/editar-canal/editar-canal.component";
import {ModalBuscadorComponent} from "../buscador/modal-buscador/modal-buscador.component";
import {HistorialBusquedaComponent} from "./historial-busqueda/historial-busqueda.component";
import {HistorialVideosComponent} from "./historial-videos/historial-videos.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  token :any = localStorage.getItem('token');

  //Iconos
  icon_lupa = faSearch;
  icon_notificacion = faBell ;
  icon_camera = faCamera ;

  usuario = new Usuario();
  canal = new Canal();

  notificaciones :any;

  constructor(private router: Router,
              private service: GeneralService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.usuario.username = localStorage.getItem('username') || '';

    console.log(localStorage.getItem('username'))
    console.log(this.token)
    this.service
      .getUsuarioByUsername(this.usuario)
      .subscribe((data: any) => {
        // console.log(data);
        this.usuario = data;
        this.getNotificacionesPorUsuario();

        this.service.getCanalPorUsuario(this.usuario).subscribe((data:any)=>{

          this.canal = data;

          // console.log(data)

        }, error => {

          // console.log(error)

        })

      });

  }

  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.router.navigate(['/apollo']);

  }

  getNotificacionesPorUsuario(){

    this.service.notificacionesPorUsuario(this.usuario).subscribe(data=>{

      this.notificaciones = data;
      console.log(data)

    })

  }

  abrirBuscador(){
    this.dialog.open(ModalBuscadorComponent,{
      panelClass: 'custom-modal',
      position:{top:'10px'}
    });

  }

  abrirHistorialBusqueda(){
    this.dialog.open(HistorialBusquedaComponent),{
      width:'70%'
    }
  }

  abrirHistorialVideos(){
    this.dialog.open(HistorialVideosComponent),{
      width:'70%'
    }
  }

}

