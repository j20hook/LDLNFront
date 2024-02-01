import {Component, OnInit} from '@angular/core';
import {Usuario} from "../models/Usuario";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit{

usuario = new Usuario();

  constructor(private service: GeneralService) {}

  ngOnInit() {

    this.service.getDatos().subscribe((data:any) => {


    });
  }


}
