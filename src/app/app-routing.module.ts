import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioPruebaComponent} from "./crear-usuario-prueba/crear-usuario-prueba.component";
import {ErrorcuatrocientoscuatroComponent} from "./errorcuatrocientoscuatro/errorcuatrocientoscuatro.component";

const routes: Routes = [

  {path:'prueba', component : CrearUsuarioPruebaComponent},
  {path:'error404', component : ErrorcuatrocientoscuatroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
