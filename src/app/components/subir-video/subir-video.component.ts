import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Tipos} from "../../models/Tipos";
import {Video} from "../../models/Video";

@Component({
  selector: 'app-subir-video',
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})
export class SubirVideoComponent implements OnInit{

  constructor(private service:GeneralService, public router: Router) {
  }

  video= new Video();
  tiposVideo : string[] = [];
  etiquetas : string[] = [];

  ngOnInit() {

    this.service.tipoVideos().subscribe((data:any) => {

      for (var desc of data)

      this.tiposVideo.push(desc['descripcion'])

    });

    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)

        this.etiquetas.push(desc['descripcion'])

    });

  }

  crearVideo(){

    this.video.canal = 1;

    this.service.subirVideo(this.video).subscribe(data=>{

    })

  }

}

document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar') as HTMLDivElement;
  const porcentaje = document.getElementById('progress-bar') as HTMLDivElement;
  const duration = 5000; // Duración en milisegundos (en este caso, 5 segundos)
  let startTime: number;
  const modal = document.getElementById('progress-modal');

  // Inicia el intervalo para actualizar la barra de progreso
  let interval: any;

  function startProgressBar() {
    // Guarda el tiempo de inicio
    startTime = Date.now();

    // Muestra el modal
    modal!.style.display = 'block';

    // Inicia el intervalo para actualizar la barra de progreso
    interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const percent = (elapsedTime / duration) * 100;

      // Actualiza la barra de progreso
      setProgressBarWidth(percent);
      updatePorcentaje(percent);

      // Verifica si se alcanzó el 100%
      if (percent >= 100) {
        clearInterval(interval); // Detiene el intervalo cuando alcanza el 100%
        // Oculta el modal al finalizar
        modal!.style.display = 'none';
        window.location.href = '/apollo';

      }
    }, 20); // Intervalo de actualización (en milisegundos)
  }

  // Asocia la función startProgressBar al evento click del botón "Subir"
  const subirButton = document.getElementById('subir-button');
  subirButton!.addEventListener('click', startProgressBar);
});

function setProgressBarWidth(percent: number) {
  const progressBar = document.getElementById('progress-bar') as HTMLDivElement;
  progressBar.style.width = `${percent}%`;
}

function updatePorcentaje(percent: number) {
  const porcentaje = document.getElementById('progress-bar') as HTMLDivElement;
  porcentaje.innerText = `${Math.round(percent)}%`;
}
