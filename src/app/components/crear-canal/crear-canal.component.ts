import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { Canal } from '../../models/Canal';
import { Usuario } from '../../models/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-canal',
  templateUrl: './crear-canal.component.html',
  styleUrls: ['./crear-canal.component.css'],
})
export class CrearCanalComponent implements OnInit {
  // Introducimos variables que vamos a necesitar en el componente.
  nuevoCanal = new Canal();
  usuario1 = new Usuario();
  usuario: any;
  canales: any = [];
  etiquetas : string[] = [];

  // Introducimos en el constructor el service y el routing
  constructor(
    private service: GeneralService,
    public router: Router
  ) {}

  // Solicitamos el usuario para sacar el id
  ngOnInit() {

    this.usuario1.username = localStorage.getItem('username') || '';
    this.service.getUsuarioByUsername(this.usuario1).subscribe((data) => {
      this.usuario = data;
    });

    this.service.getEtiquetas().subscribe((data:any) => {

      for (var desc of data)

        this.etiquetas.push(desc['descripcion'])

    });
  }

  // Funcion para crear canal
  crearCanal() {
    this.nuevoCanal.usuario = this.usuario.id;

    this.service.crearCanal(this.nuevoCanal).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Canal Creado!',
          showConfirmButton: false,
          timer: 1000,
        });

        this.router.navigateByUrl(`apollo/inicio_log`);
      },
      (error) => {
        console.error(error); // Manejo de errores
        Swal.fire({
          icon: 'error',
          title: 'Oops...!',
          text: '¡Algo salio mal!',
        });

        this.router.navigate(['/error404'])
      }
    );
  }
}
