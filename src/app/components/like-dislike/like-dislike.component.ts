import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { ValoracionPositiva } from '../../models/ValoracionPositiva';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ValoracionNegativa } from '../../models/ValoracionNegativa';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css'],
  animations: [
    trigger('heart', [
      state(
        'unliked',
        style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)',
        }),
      ),
      state(
        'liked',
        style({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)',
        }),
      ),
      transition('unliked <=> liked', animate('100ms ease-out')),
    ]),
    trigger('dislike', [
      state(
        'undisliked',
        style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)',
        }),
      ),
      state(
        'disliked',
        style({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)',
        }),
      ),
      transition('undisliked <=> disliked', animate('100ms ease-out')),
    ]),
  ],
})
export class LikeDislikeComponent implements OnInit {
  usuario: any;
  usuario1 = new Usuario();
  video: any;
  like = new ValoracionPositiva();
  like1 = new ValoracionPositiva();
  dislike = new ValoracionNegativa();
  dislike1 = new ValoracionNegativa();
  revisionLike: any;
  revisionDislike: any;
  estado_like = false;
  estado_dislike = false;
  public likeState: string = 'unliked';
  public disLikeState: string = 'undisliked';
  public likeIconName: string = 'heart-empty';
  public dislikeIconName: string = 'thumb-down';

  likes: any;

  constructor(
    private service: GeneralService,
    public router: Router,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.usuario1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
      this.usuario = data;
    });
    this.route.params.subscribe((params) => {
      const videoId = +params['id'];
      if (videoId) {
        this.service.getVideoPorId(videoId).subscribe(
          (data) => {
            this.video = data;
            this.comprobarLike();
            this.comprobarDislike();
          },
          (error) => {
            console.error('no funciona', error);
          },
        );
      }
    });
    this.likesPorVideo();
  }

  // Aqui estan todas las funcionalidades del Like

  async comprobarLike() {
    if (this.usuario && this.video) {
      this.like1.usuario = this.usuario;
      this.like1.video = this.video;
      this.service.getLikeId(this.like1).subscribe(
        (data) => {
          this.revisionLike = data;
          if (this.revisionLike.exists == true) {
            this.likeState = 'liked';
          }
        },
        (error) => {
          console.error('no funciona', error);
        },
      );
    }
  }

  darLike() {
    this.like.usuario.id = this.usuario.id;
    this.like.video.id = this.video.id;

    if (this.disLikeState == 'disliked') {
      this.quitarDislike();
      this.disLikeState = 'undisliked';
    }

    this.service.darLike(this.like).subscribe(
      (data) => {
        data;
        this.estado_like = true;
      },
      (error) => {
        console.error('no funciona', error);
      },
    );
    this.likesPorVideo();
  }

  quitarLike() {
    this.service.quitarLike(this.revisionLike.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('no funciona', error);
      },
    );
    this.likesPorVideo();
  }

  async toggleLikeState() {
    if (this.revisionLike.exists == false) {
      this.likeState = 'liked';
      this.likeIconName = 'heart';
      this.darLike();
      await this.comprobarLike();
    } else {
      this.likeState = 'unliked';
      this.likeIconName = 'heart-empty';
      this.quitarLike();
      await this.comprobarLike();
    }
  }

  // Contar con el numero de Likes

  async likesPorVideo() {
    this.route.params.subscribe((params) => {
      const videoId = +params['id'];
      if (videoId) {
        this.service.likesPorVideo(videoId).subscribe(
          (data) => {
            this.likes = data;
          },
          (error) => {
            console.error('no funciona', error);
          },
        );
      }
    });
  }

  // A partir de aqui estan todas las funcionalidades del Like

  async comprobarDislike() {
    if (this.usuario && this.video) {
      this.dislike1.usuario = this.usuario;
      this.dislike1.video = this.video;
      this.service.getDislikeId(this.dislike1).subscribe(
        (data) => {
          this.revisionDislike = data;
          if (this.revisionDislike.exists == true) {
            this.disLikeState = 'disliked';
          }
        },
        (error) => {
          console.error('no funciona', error);
        },
      );
    }
  }

  darDislike() {
    this.dislike.usuario.id = this.usuario.id;
    this.dislike.video.id = this.video.id;

    if (this.likeState == 'liked') {
      this.quitarLike();
      this.likeState = 'unliked';
    }

    this.service.darDislike(this.dislike).subscribe(
      (data) => {
        data;
        this.estado_dislike = true;
      },
      (error) => {
        console.error('no funciona', error);
      },
    );
  }

  quitarDislike() {
    this.service.quitarDislike(this.revisionDislike.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('no funciona', error);
      },
    );
  }

  async toggleDislikeState() {
    if (this.revisionDislike.exists == false) {
      this.disLikeState = 'disliked';
      this.dislikeIconName = 'thumb-down';
      this.darDislike();
      await this.comprobarDislike();
    } else {
      this.disLikeState = 'undisliked';
      this.dislikeIconName = 'thumb-down-empty';
      this.quitarDislike();
      await this.comprobarDislike();
    }
  }
}
