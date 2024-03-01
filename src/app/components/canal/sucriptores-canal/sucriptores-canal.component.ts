import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-sucriptores-canal',
  templateUrl: './sucriptores-canal.component.html',
  styleUrls: ['./sucriptores-canal.component.css']
})
export class SucriptoresCanalComponent {
  canal: any;
  canal_loggeado: any;
  lista_suscriptores: any;

  constructor(
    private route: ActivatedRoute,
    private dataservice: GeneralService,
    private router: Router,
    private sharedService: SharedService
  ) {}


  listarSuscriptores(){
    if(this.canal) {
      this.dataservice.getSucriptoresPorIdCanal(this.canal.id).subscribe(
        data => {
          this.lista_suscriptores = data;
        }
      )
    }

  }


  ngOnInit() {

    this.canal = this.sharedService.getCanal();

    this.canal_loggeado = this.sharedService.getCanalLoggeado();

    this.listarSuscriptores();

  }
}
