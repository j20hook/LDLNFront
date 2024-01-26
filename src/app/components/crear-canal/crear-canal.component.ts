import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/Usuario";
import {HttpErrorResponse} from "@angular/common/http";
import {Canal} from "../../models/Canal";
import any = jasmine.any;

@Component({
  selector: 'app-crear-usuario-prueba',
  templateUrl: './crear-canal.component.html',
  styleUrls: ['./crear-canal.component.css']
})
export class CrearCanalComponent implements OnInit{

  canal = new Canal();
  usuario : any;
  canales : any = [];

  constructor(private service:GeneralService, public router: Router) {
  }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario')
  }

  crearCanal(){


    this.service.crearCanal(this.canal).subscribe((data :any)=>{
      console.log(data)
      if (data['message'] == 'Canal creado'){

        window.location.reload()

      }

    });


  }

}
