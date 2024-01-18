import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioPruebaComponent} from "./crear-usuario-prueba/crear-usuario-prueba.component";

const routes: Routes = [

  {path:'prueba', component : CrearUsuarioPruebaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
