import {Component, OnInit} from '@angular/core';
import {faBell, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {GeneralService} from "../../services/general.service";
import {Usuario} from "../../models/Usuario";
import {Canal} from "../../models/Canal";


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

  constructor(private router: Router, private service: GeneralService) {

  }

  ngOnInit() {
    this.usuario.username = localStorage.getItem('username') || '';

    this.service
      .getUsuarioByUsername(this.usuario)
      .subscribe((data: any) => {
        // console.log(data);
        this.usuario = data;
        this.getNotificacionesPorUsuario();

        this.service.getCanalPorUsuario(this.usuario).subscribe((data:any)=>{

          this.canal = data;

        }, error => {

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

    })

  }

}

// declare var $: any;
// $(document).ready(function() {
//
//   $(".notification-drop .item").on('click', function() {
//
//     $.find('ul').toggle();
//
//   });
//
// });
