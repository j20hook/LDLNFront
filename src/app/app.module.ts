;
import { ErrorcuatrocientoscuatroComponent } from './components/errorcuatrocientoscuatro/errorcuatrocientoscuatro.component'// Importamos el servidor de Angular
import { NgModule } from '@angular/core';

// Importamos el browser
import { BrowserModule } from '@angular/platform-browser';

// Importamos el Routing module para hacer las rutas
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Importamos el generador de iconos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importamos los componentes
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { CrearUsuarioPruebaComponent } from './components/crear-usuario-prueba/crear-usuario-prueba.component';
import { WebsiteHomeComponent } from './components/website-home/website-home.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioPruebaComponent,
    ErrorcuatrocientoscuatroComponent,
    WebsiteHomeComponent,
    LoginUsuarioComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
