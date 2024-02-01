import {Component, OnInit} from '@angular/core';
import {Usuario} from "../models/Usuario";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit{

usuario : any;



  constructor(private service: GeneralService) {}

  ngOnInit() {

      this.service.getDatos((Number(localStorage.getItem('id_usuario')))).subscribe(data => {

        this.usuario = data;
        console.log(data)

      })

    ;
  }


}
