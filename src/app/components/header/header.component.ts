import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token :any = localStorage.getItem('token');

  //Iconos
  icon_lupa = faSearch;
  icon_notificacion = faBell ;
  icon_camera = faCamera ;
  constructor(private router: Router) {

  }
  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.router.navigate(['/apollo']);

  }

}
