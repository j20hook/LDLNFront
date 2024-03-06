import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../../models/Video';
import { Usuario } from '../../models/Usuario';
import { Comentario } from '../../models/Comentario';
import { Visita } from '../../models/Visita';
import Swal from "sweetalert2";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private service: GeneralService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this.demoYouTubePlayer = this.video;
    this.id_video = this._route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      1200,
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  usuario = new Usuario();
  video: any;
  id_video: string | null;
  id_usuario?: number;
  suscriptores: any;
  videosRecomendados: any;

  videoComentario = new Video();
  comentarios: any;

  comentario = new Comentario();

  visita = new Visita();
  visita2 = new Visita();
  visitas: any;

  mostrarComentarios() {
    this.videoComentario.id = Number(this.id_video);
    let comentario = document.getElementById('texto') as HTMLInputElement
    this.service.comentariosPorVideo(this.videoComentario).subscribe((data) => {
      this.comentarios = data;
      comentario.value = '';
    });
  }

  getVisitas() {
    this.visita2.id_video = Number(this.id_video);

    this.service.visitasPorVideo(this.visita2).subscribe((data) => {
      this.visitas = data;
    });
  }

  ngOnInit() {
    this.mostrarComentarios();
    this.getVisitas();

    this.usuario.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuario).subscribe((data: any) => {
      this.id_usuario = data['id'];
      this.usuario.id = data['id'];
      this.crearVisita(Number(this.usuario.id));
      this.service.getVideosRecomendados(this.usuario).subscribe((data) => {
        this.videosRecomendados = data;
        console.log(this.videosRecomendados);
      });
    });

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.service.getVideoPorId(Number(this.id_video)).subscribe(
      (data) => {
        this.video = data;

        this.service
          .getNumSuscriptoresCanal(Number(this.video.canal.id))
          .subscribe(
            (data) => {
              this.suscriptores = data;
            },
            (error) => {
              console.error('no funciona', error);
            },
          );
      },
      (error) => {
        this.router.navigate(['/error404']);
        console.error('no funciona', error);
      },
    );

    setInterval(() => {
      this.service
        .getNumSuscriptoresCanal(Number(this.video.canal.id))
        .subscribe(
          (data) => {
            this.suscriptores = data;
          },
          (error) => {
            console.error('no funciona', error);
          },
        );
    }, 5000);
  }

  crearVisita(id: number) {
    this.visita.id_video = Number(this.id_video);
    this.visita.id_usuario = id;

    this.service.crearVisita(this.visita).subscribe((data) => {});
  }

  enviarComentario() {
    this.comentario.id_video = Number(this.id_video);
    this.comentario.id_usuario = this.id_usuario;

    this.service.crearComentario(this.comentario).subscribe(
      (data) => {
        this.mostrarComentarios();
      },
      (error) => {
        console.error('no funciona', error);
      },
    );
  }

  protected readonly obtenerIdDeVideo = obtenerIdDeVideo;
  protected readonly window = window;
  protected readonly setTimeout = setTimeout;
  protected readonly formatearFecha = formatearFecha;
  protected readonly verMas = verMas;
  protected readonly copyUrlToClipboard = copyUrlToClipboard;
}

function obtenerIdDeVideo(url: string): string | null {
  // Patrón de expresión regular para buscar el identificador del video en la URL de YouTube
  const patron =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Intenta hacer coincidir el patrón en la URL proporcionada
  const coincidencias = url.match(patron);

  // Si hay coincidencias, devuelve el identificador del video, de lo contrario, devuelve null
  return coincidencias ? coincidencias[1] : null;
}

function formatearFecha(fechaString: string): string {
  // Crear un objeto de fecha a partir de la cadena proporcionada
  const fecha = new Date(fechaString);

  // Obtener día, mes y año
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('es-ES', { month: 'long' });
  const anio = fecha.getFullYear();

  // Crear la cadena de fecha formateada
  const fechaFormateada = `${dia} ${mes} ${anio}`;

  return fechaFormateada;
}

function verMas() {
  const description = document.getElementById('descripcion');
  const button = document.getElementById('verMas');

  if (description!.style.maxHeight) {
    // Si la descripción está expandida, contraerla
    description!.style.maxHeight = '120px';
    button!.textContent = 'Ver más';
  } else {
    // Si la descripción está contraída, expandirla
    description!.style.maxHeight = description!.scrollHeight + 'px';
    button!.textContent = 'Ver menos';
  }
}

function copyUrlToClipboard() {

  navigator.clipboard.writeText(window.location.href);
  Swal.fire({
    icon: 'success',
    title: 'URL copied to clipboard!',
  });

}
