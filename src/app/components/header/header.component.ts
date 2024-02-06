import {Component, OnInit} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {GeneralService} from "../../services/general.service";


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

  usuario : any;
  canal : any;

  constructor(private router: Router, private service: GeneralService) {

  }

  ngOnInit() {

    this.usuario.username = localStorage.getItem('username') || '';
    this.service
      .getUsuarioByUsername(this.usuario)
      .subscribe((data: any) => {
        console.log(data);
        this.usuario = data

        this.service.getCanalPorUsuario(this.usuario).subscribe(data=>{

          this.canal = data;

          console.log(data)

        })

      });

  }

  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.router.navigate(['/apollo']);

  }

}
