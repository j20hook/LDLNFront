import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {GeneralService} from "../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {


  constructor(private _route: ActivatedRoute, private service:GeneralService, public router: Router , public cdr : ChangeDetectorRef) {

    this.id_usuario = this._route.snapshot.paramMap.get('id');

  }

  id_usuario : any

  usuario = new Usuario();

  etiquetas : string[] = [];


  ngOnInit() {

    this.service.getUsuarioPorId(this.id_usuario).subscribe((data:any)=>{

      this.usuario = data;

    })

    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)

        this.etiquetas.push(desc['descripcion'])

    });
  }

  editarPerfil(){

    this.service.editarPerfil(this.id_usuario, this.usuario).subscribe(data=>{
      localStorage.setItem('username', this.usuario.username);


      this.cdr.detectChanges();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cambios realizados con éxito',
        showConfirmButton: false,
        timer: 2000,
      });


      this.service.login(this.usuario).subscribe({

        next: (respuesta:any) => {

          if(respuesta.token != null){

            localStorage.setItem('token' , respuesta.token);
            localStorage.setItem('username', this.usuario.username);

          }

        },

        error: (e) => console.error(e),

      });

      this.router.navigate(['apollo/perfil/datos']);

    })

  }

}
