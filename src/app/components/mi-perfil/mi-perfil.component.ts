import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {GeneralService} from "../../services/general.service";
import {Canal} from "../../models/Canal";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit{

  usuario1 = new Usuario()

  usuario: any;

  canal = new Canal();



  constructor(private service: GeneralService) {}

  ngOnInit() {

    this.usuario1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuario1).subscribe((data:any) => {
      this.usuario = data;
      console.log(this.usuario);
      this.service.getDatos(this.usuario)
        .subscribe(
          data => {
            this.usuario = data;
            console.log(this.usuario);
          },
          error => {
            console.error("no funciona", error);
          }
        )
      this.service.getCanalPorUsuario(this.usuario).subscribe((data:any) => {
          this.canal = data;
          console.log(this.canal);
        },
        error => {
          console.error("no funciona", error);
        })
    });

  }


}
