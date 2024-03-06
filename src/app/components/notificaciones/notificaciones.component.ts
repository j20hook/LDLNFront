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

    this.service.notificacionesPorUsuario(this.usuario).subscribe((data:any)=>{

      data.forEach((c: any) => c.fecha_notificacion = new Date(c.fecha_notificacion));
      data.sort((a: any, b: any) => b.fecha_notificacion - a.fecha_notificacion);
      data.forEach((c: any) => c.fecha_notificacion = formatearFecha(c.fecha_notificacion));
      this.notificaciones = data

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

function formatearFecha(notificacionFecha: Date): string {
  const ahora = new Date();
  const diferenciaMs = ahora.getTime() - notificacionFecha.getTime();
  const segundos = Math.floor(diferenciaMs / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30);
  const años = Math.floor(dias / 365);

  if (segundos < 60) {
    return 'Hace menos de un minuto';
  } else if (minutos < 60) {
    return `Hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'} atrás`;
  } else if (horas < 24) {
    return `Hace ${horas} ${horas === 1 ? 'hora' : 'horas'} atrás`;
  } else if (dias < 7) {
    return `Hace ${dias} ${dias === 1 ? 'día' : 'días'} atrás`;
  } else if (semanas < 4) {
    return `Hace ${semanas} ${semanas === 1 ? 'semana' : 'semanas'} atrás`;
  } else if (meses < 12) {
    return `Hace ${meses} ${meses === 1 ? 'mes' : 'meses'} atrás`;
  } else {
    return `Hace ${años} ${años === 1 ? 'año' : 'años'} atrás`;
  }
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
