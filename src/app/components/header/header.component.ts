import {Component, OnInit} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private router: Router, private service: GeneralService) {

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

}
