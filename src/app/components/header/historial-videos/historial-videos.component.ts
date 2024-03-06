import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../../services/general.service";
import {Usuario} from "../../../models/Usuario";

@Component({
  selector: 'app-historial-videos',
  templateUrl: './historial-videos.component.html',
  styleUrls: ['./historial-videos.component.css']
})
export class HistorialVideosComponent implements OnInit{

  usuario:any;
  historial: any;

  constructor(private service: GeneralService) {}

  ngOnInit() {

    let usuario = new Usuario();
    usuario.username = localStorage.getItem('username') || '';

    this.service.getUsuarioByUsername(usuario).subscribe(data=>{

      this.usuario = data;
      this.getHistorial()

    })

  }

  getHistorial(){

    this.service.getHistorial(this.usuario).subscribe(data=>{

      this.historial = data;
      console.log(data)

    });

  }

}
