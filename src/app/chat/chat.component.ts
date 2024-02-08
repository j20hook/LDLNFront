import {Component, OnInit} from '@angular/core';
import {Usuario} from "../models/Usuario";
import {GeneralService} from "../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  usuari1 = new Usuario()

  usuario: any;

  listamensajes : any;

  constructor(private service: GeneralService, private _route: ActivatedRoute, private router: Router) {}
  ngOnInit() {

    this.usuari1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuari1).subscribe((data:any) => {
      this.usuario = data;
      console.log(this.usuario);
      this.service.listarMensaje(this.usuario)
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
}
}
