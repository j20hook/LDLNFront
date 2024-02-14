import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { ValoracionPositiva } from '../../models/ValoracionPositiva';

@Component({
    selector: 'app-like-dislike',
    templateUrl: './like-dislike.component.html',
    styleUrls: ['./like-dislike.component.css'],
})
export class LikeDislikeComponent {
    usuario: any;
    usuario1 = new Usuario();
    video: any;
    like = new ValoracionPositiva();
    like1 = new ValoracionPositiva();
    revisionLike: any;
    estado_like = false;

    constructor(
        private service: GeneralService,
        public router: Router,
        public route: ActivatedRoute
    ) {}
}
