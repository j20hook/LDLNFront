import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { ValoracionPositiva } from '../../../models/ValoracionPositiva';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'app-boton-like',
    templateUrl: './boton-like.component.html',
    styleUrls: ['./boton-like.component.css'],
    animations: [
        trigger('heart', [
            state(
                'unliked',
                style({
                    color: '#fff',
                    opacity: '0.5',
                    transform: 'scale(1)',
                })
            ),
            state(
                'liked',
                style({
                    color: '#e74c3c',
                    opacity: '1',
                    transform: 'scale(1.1)',
                })
            ),
            transition('unliked <=> liked', animate('100ms ease-out')),
        ]),
    ],
})
export class BotonLikeComponent implements OnInit {
    usuario: any;
    usuario1 = new Usuario();
    video: any;
    like = new ValoracionPositiva();
    like1 = new ValoracionPositiva();
    revisionLike: any;
    estado_like = false;
    public likeState: string = 'unliked';
    public iconName: string = 'heart-empty';

    constructor(
        private service: GeneralService,
        public router: Router,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.usuario1.username = localStorage.getItem('username') || '';
        this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
            this.usuario = data;
            console.log(this.usuario);
        });
        this.route.params.subscribe((params) => {
            const videoId = +params['id'];
            if (videoId) {
                this.service.getVideoPorId(videoId).subscribe(
                    (data) => {
                        this.video = data;
                        console.log(this.video);
                        this.comprobarLike();
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );
            }
        });
    }

    async comprobarLike() {
        if (this.usuario && this.video) {
            this.like1.usuario = this.usuario;
            this.like1.video = this.video;
            this.service.getLikeId(this.like1).subscribe(
                (data) => {
                    this.revisionLike = data;
                },
                (error) => {
                    console.error('no funciona', error);
                }
            );
        }
    }

    darLike() {
        this.like.usuario.id = this.usuario.id;
        this.like.video.id = this.video.id;

        this.service.darLike(this.like).subscribe(
            (data) => {
                data;
                this.estado_like = true;
            },
            (error) => {
                console.error('no funciona', error);
            }
        );
    }

    quitarLike() {
        this.service.quitarLike(this.revisionLike.id).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.error('no funciona', error);
            }
        );
    }

    async toggleLikeState() {
        if (this.revisionLike.exists == false) {
            this.likeState = 'liked';
            this.iconName = 'heart';
            this.darLike();
            await this.comprobarLike();
        } else {
            this.likeState = 'unliked';
            this.iconName = 'heart-empty';
            this.quitarLike();
            await this.comprobarLike();
        }
    }
}
