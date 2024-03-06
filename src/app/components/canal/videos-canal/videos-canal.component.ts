import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-videos-canal',
  templateUrl: './videos-canal.component.html',
  styleUrls: ['./videos-canal.component.css']
})
export class VideosCanalComponent implements OnInit{

  canal: any;
  canal_loggeado: any;
  lista_videos: any;

  constructor(
    private route: ActivatedRoute,
    private service: GeneralService,
    private router: Router,
    private sharedService: SharedService
  ) {}


  listarVideosCanal(){
    if(this.canal) {
      this.service.getVideosCanalId(this.canal.id).subscribe(
        data => {
          this.lista_videos = data;
        }
      )
    }

  }


  ngOnInit() {

    this.canal = this.sharedService.getCanal();

    this.canal_loggeado = this.sharedService.getCanalLoggeado();

    this.listarVideosCanal();

  }

  editarVideo(id_video:number){

    this.router.navigate([`apollo/video/editar/${id_video}`]);

  }

  eliminarVideo(id_video:number){

    this.service.eliminarVideo(id_video).subscribe(data=>{

      this.listarVideosCanal();

    })

  }


}

