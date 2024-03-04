import {Component, OnInit} from '@angular/core';
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {GeneralService} from "../../services/general.service";
import {Usuario} from "../../models/Usuario";
import {Canal} from "../../models/Canal";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit{

  constructor(private router: Router, private service: GeneralService) {

  }

  usuario = new Usuario();
  notificaciones :any;
  notificacionesNuevasNumber: any;

  ngOnInit() {
    this.usuario.username = localStorage.getItem('username') || '';

    this.service.getUsuarioByUsername(this.usuario).subscribe((data: any) => {

        this.usuario = data;
        this.getNotificacionesPorUsuario();
        this.notificacionesNuevas();

      });

  }

  getNotificacionesPorUsuario(){

    this.service.notificacionesPorUsuario(this.usuario).subscribe(data=>{

      this.notificaciones = data;

    })

  }

  notificacionesNuevas(){

    this.service.notificacionesNuevas(this.usuario).subscribe((data:any)=>{

      this.notificacionesNuevasNumber = data[0].count;

    })

  }

  quitarAlerta(){

    this.service.quitarAlerta(this.usuario).subscribe(data=>{

      this.notificacionesNuevasNumber == 0;

      this.notificacionesNuevas();

    })

  }

    protected readonly icon_notificacion = faBell;
}

document.addEventListener('DOMContentLoaded', () => {
  const notificationBtn = document.getElementById('notification-btn');
  const notificationDropdown = document.getElementById('notification-dropdown');

  if (notificationBtn && notificationDropdown) {
    notificationBtn.addEventListener('click', () => {
      notificationDropdown.style.display = (notificationDropdown.style.display === 'none') ? 'block' : 'none';
    });

    // Hide the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!notificationBtn.contains(event.target as Node) && !notificationDropdown.contains(event.target as Node)) {
        notificationDropdown.style.display = 'none';
      }
    });
  }
});
