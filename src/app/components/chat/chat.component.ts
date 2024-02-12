import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {GeneralService} from "../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  usuari1 = new Usuario()

  id_usuario: any;

  id_canal: any;

  listamensajes: any;

  abrirComponente2 = false;
  private subscription: Subscription;
  constructor(private dataservice: GeneralService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
    this.subscription = this.sharedService.abrirChat$.subscribe(
      (value) => (this.abrirComponente2 = value)
    );
  }
  ngOnInit() {

    this.usuari1.username = localStorage.getItem('username') || '';
    this.dataservice.getUsuarioByUsername(this.usuari1).subscribe((data: any) => {
      this.id_usuario = data;
      console.log(this.id_usuario);

      this.route.params.subscribe(params => {
        const canalId = +params['id'];
        if (canalId) {
          this.dataservice.getCanalPorId(canalId)
            .subscribe(
              data => {
                this.id_canal = data;
                console.log(this.id_canal)
              },
              error => {
                console.error("no funciona", error);
              }
            )
        }


        this.dataservice.listarMensaje(this.id_canal, this.id_usuario)
          .subscribe(
            data => {
              this.listamensajes = data;
              console.log(this.listamensajes);
            },
            error => {
              console.error("no funciona", error);
            }
          )

      })
    })
  }
}
