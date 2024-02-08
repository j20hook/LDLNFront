import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";

@Component({
  selector: 'app-videos-canal',
  templateUrl: './videos-canal.component.html',
  styleUrls: ['./videos-canal.component.css']
})
export class VideosCanalComponent implements OnInit{

  id_canal: any;
  etiquetas_canal:any;

  constructor(
    private route: ActivatedRoute,
    private dataservice: GeneralService,
    private router: Router
  ) {}
  ngOnInit() {

   /* Probar traer info

   this.dataservice.currentVariable.subscribe({
      next: (v) => this.buscarVideosEtiquetas(v)
    });

    this.route.params.subscribe(params => {
      const canalId = +params['id'];
      if (canalId) {
        this.dataservice.getCanalPorId(canalId)
          .subscribe(
            data => {
              this.canal = data;
              console.log(this.canal)
            },
            error => {
              console.error("no funciona", error);
            }
          )
      }
    });

    */
}

/*buscarVideosEtiquetas(etiquetas):void{}*/
}

