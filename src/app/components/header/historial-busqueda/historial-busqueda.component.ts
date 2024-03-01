import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../services/shared.service";
import {GeneralService} from "../../../services/general.service";

@Component({
  selector: 'app-historial-busqueda',
  templateUrl: './historial-busqueda.component.html',
  styleUrls: ['./historial-busqueda.component.css']
})
export class HistorialBusquedaComponent implements OnInit{

  usuario_loggeado:any;
  historial_busqueda:any;
  obtenerUsuarioLoggeado(){
    this.usuario_loggeado = this.sharedService.getUsuarioLoggeado();

  }

  listarBusuquedas(){

    this.dataService.listarBusuqeda(this.usuario_loggeado).subscribe(
      (data) => {
        // console.log(data);
        this.historial_busqueda = data;
      }
    )

  }
  constructor(private sharedService:SharedService,
              private dataService: GeneralService,
  ) {
  }
  ngOnInit(){

    this.obtenerUsuarioLoggeado();
    this.listarBusuquedas();


    }
}
