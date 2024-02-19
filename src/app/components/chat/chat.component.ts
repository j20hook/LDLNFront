import {Component, OnInit, Inject } from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {GeneralService} from "../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SharedService} from "../../services/shared/shared.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  canalId: any;
  usuario: any;
  usuari1 = new Usuario();
  canal: any;

  constructor(private dataservice: GeneralService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private shared: SharedService) {}


  ngOnInit() {

    this.canal = this.shared.getIdCanal();
    console.log(this.canal)


  /*  this.route.params.subscribe(params => {
      const canalId = +params['id'];
      if (canalId) {
        this.dataservice.getCanalPorId(canalId)
          .subscribe(
            data => {
              this.canal = data;
              console.log(this.canal)
            },
            error => {
              console.error("no funciona", error);
            }
          )

        this.usuari1.username = localStorage.getItem('username') || '';
        this.dataservice.getUsuarioByUsername(this.usuari1).subscribe((data) => {
          this.usuario = data;
          console.log(this.usuario);

          this.dataservice.getCanalPorUsuario(this.usuario).subscribe(
            data => {
              this.canal_loggeado = data;
              console.log(this.canal_loggeado)

              this.dataservice.listarMensaje(this.canal_loggeado, this.canal).subscribe(
                data => {
                  this.lista_mensajes = data;
                  console.log(this.lista_mensajes)
                }
              )

            }
          )

        });
      }
    })*/
  }
}
