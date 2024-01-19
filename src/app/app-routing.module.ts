import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioPruebaComponent} from "./crear-usuario-prueba/crear-usuario-prueba.component";
import {WebsiteHomeComponent} from "./website-home/website-home.component";

const routes: Routes = [
  {path:'apollo', component: WebsiteHomeComponent},
  {path:'', redirectTo:'/apollo', pathMatch:'full'},
  {path:'apollo/usuario/crear', component : CrearUsuarioPruebaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
