import { ErrorcuatrocientoscuatroComponent } from './components/errorcuatrocientoscuatro/errorcuatrocientoscuatro.component';
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
import { RegistroComponent } from './components/registro/registro.component';
import { WebsiteHomeComponent } from './components/website-home/website-home.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { SubirVideoComponent } from './components/subir-video/subir-video.component';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HeaderComponent } from './components/header/header.component';
import { IncioLogComponent } from './components/incio-log/incio-log.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrearCanalComponent } from './components/crear-canal/crear-canal.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { CanalComponent } from './components/canal/canal.component';
import { VideosCanalComponent } from './components/canal/videos-canal/videos-canal.component';
import { SucriptoresCanalComponent } from './components/canal/sucriptores-canal/sucriptores-canal.component';
import { BotonSuscripcionComponent } from './components/boton-suscripcion/boton-suscripcion.component';
import { EditarVideoComponent } from './components/editar-video/editar-video.component';
import { EditarCanalComponent } from './components/canal/editar-canal/editar-canal.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MatIconModule } from '@angular/material/icon';
import { DataComponent } from './components/canal/data/data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ErrorcuatrocientoscuatroComponent,
    WebsiteHomeComponent,
    SubirVideoComponent,
    VideoComponent,
    LoginUsuarioComponent,
    HeaderComponent,
    IncioLogComponent,
    CrearCanalComponent,
    FooterComponent,
    MiPerfilComponent,
    CanalComponent,
    VideosCanalComponent,
    SucriptoresCanalComponent,
    BotonSuscripcionComponent,
    EditarCanalComponent,
    EditarVideoComponent,

    LikeDislikeComponent,

    ResetPasswordComponent,
    DataComponent,
    EditarPerfilComponent,
    NotificacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
