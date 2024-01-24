import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioPruebaComponent} from "./components/crear-usuario-prueba/crear-usuario-prueba.component";
import {ErrorcuatrocientoscuatroComponent} from "./components/errorcuatrocientoscuatro/errorcuatrocientoscuatro.component";
import {WebsiteHomeComponent} from "./components/website-home/website-home.component";
import {LoginUsuarioComponent} from "./components/login-usuario/login-usuario.component";

const routes: Routes = [

  {path:'apollo', component: WebsiteHomeComponent},
  {path:'', redirectTo:'/apollo', pathMatch:'full'},
  {path:'registro', component : CrearUsuarioPruebaComponent},
  {path:'error404', component : ErrorcuatrocientoscuatroComponent},
  {path:'login' , component : LoginUsuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
