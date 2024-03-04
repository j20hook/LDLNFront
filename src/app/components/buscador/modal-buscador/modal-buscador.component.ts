import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";
import { Router } from '@angular/router';
import {MatDialogRef} from "@angular/material/dialog";
import {GeneralService} from "../../../services/general.service";


@Component({
  selector: 'app-modal-buscador',
  templateUrl: './modal-buscador.component.html',
  styleUrls: ['./modal-buscador.component.css']
})
export class ModalBuscadorComponent {

  busqueda: string = '';
  canal_loggeado: any;

  constructor(private sharedService: SharedService,
              private dataService: GeneralService,
              private router: Router,
              private dialogRef: MatDialogRef<ModalBuscadorComponent>) {
  }

  enviarBusqueda(){
    this.router.navigate(['apollo/buscador']);
    this.sharedService.setBusqueda(this.busqueda);
    this.canal_loggeado = this.sharedService.getUsuarioLoggeado();
    this.dataService.RegistrarBusqueda(this.canal_loggeado, this.busqueda).subscribe({
      complete:()=>console.log("Busqueda registrada")});
    this.dialogRef.close()
  }


}
