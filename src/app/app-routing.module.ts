import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioPruebaComponent} from "./components/crear-usuario-prueba/crear-usuario-prueba.component";
import {ErrorcuatrocientoscuatroComponent} from "./components/errorcuatrocientoscuatro/errorcuatrocientoscuatro.component";
import {WebsiteHomeComponent} from "./components/website-home/website-home.component";

const routes: Routes = [

  {path:'apollo', component: WebsiteHomeComponent},
  {path:'', redirectTo:'/apollo', pathMatch:'full'},
  {path:'apollo/usuario/crear', component : CrearUsuarioPruebaComponent},
  {path:'error404', component : ErrorcuatrocientoscuatroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
