import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent} from "./components/registro/registro.component";
import { ErrorcuatrocientoscuatroComponent } from './components/errorcuatrocientoscuatro/errorcuatrocientoscuatro.component';
import { WebsiteHomeComponent } from './components/website-home/website-home.component';
import { SubirVideoComponent } from './components/subir-video/subir-video.component';
import { VideoComponent } from './components/video/video.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { CrearCanalComponent } from './components/crear-canal/crear-canal.component';
import { IncioLogComponent } from './components/incio-log/incio-log.component';
import { CanalComponent } from './components/canal/canal.component';

const routes: Routes = [

  { path:'apollo', component: WebsiteHomeComponent},
  { path:'', redirectTo:'/apollo', pathMatch:'full'},
  { path:'apollo/registro', component : RegistroComponent},
  { path:'apollo/video/subir', component : SubirVideoComponent},
  { path:'error404', component : ErrorcuatrocientoscuatroComponent},
  { path:'apollo/video/:id', component : VideoComponent},
  { path:'apollo/login' , component : LoginUsuarioComponent},
  { path:'apollo/perfil/datos' , component : MiPerfilComponent},
  { path:'apollo/canal/crear', component: CrearCanalComponent },
  { path:'apollo/inicio_log', component: IncioLogComponent },
  { path:'apollo/canal/:id', component: CanalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
