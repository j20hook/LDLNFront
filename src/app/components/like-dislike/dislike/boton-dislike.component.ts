import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { ValoracionNegativa } from '../../../models/ValoracionNegativa';

@Component({
    selector: 'app-boton-dislike',
    templateUrl: './boton-dislike.component.html',
    styleUrls: ['./boton-dislike.component.css'],
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
export class BotonDislikeComponent implements OnInit {
    usuario: any;
    usuario1 = new Usuario();
    video: any;
    dislike = new ValoracionNegativa();
    dislike1 = new ValoracionNegativa();
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
                        this.comprobarDislike();
                    },
                    (error) => {
                        console.error('no funciona', error);
                    }
                );
            }
        });
    }

    async comprobarDislike() {
        if (this.usuario && this.video) {
            this.dislike1.usuario = this.usuario;
            this.dislike1.video = this.video;
            this.service.getDislikeId(this.dislike1).subscribe(
                (data) => {
                    this.revisionLike = data;
                },
                (error) => {
                    console.error('no funciona', error);
                }
            );
        }
    }

    darDislike() {
        this.dislike.usuario.id = this.usuario.id;
        this.dislike.video.id = this.video.id;

        this.service.darDislike(this.dislike).subscribe(
            (data) => {
                data;
                this.estado_like = true;
            },
            (error) => {
                console.error('no funciona', error);
            }
        );
    }

    quitarDislike() {
        this.service.quitarDislike(this.revisionLike.id).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.error('no funciona', error);
            }
        );
    }

    async toggleDislikeState() {
        if (this.revisionLike.exists == false) {
            this.likeState = 'liked';
            this.iconName = 'heart';
            this.darDislike();
            await this.comprobarDislike();
        } else {
            this.likeState = 'unliked';
            this.iconName = 'heart-empty';
            this.quitarDislike();
            await this.comprobarDislike();
        }
    }
}
