import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;

  constructor(private service: GeneralService, private router: Router, private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetearContrasena() {
    const emailControl = this.resetPasswordForm.get('email');

    if (emailControl?.value) {
      const email = emailControl.value;

      this.service.resetearContrasena(email).subscribe(
        (response: any) => {
          console.log('Solicitud de reinicio de contraseña enviada con éxito:', response);
          // Puedes mostrar un mensaje al usuario indicando que se ha enviado la solicitud correctamente
        },
        (error: any) => {
          console.error('Error al enviar la solicitud de reinicio de contraseña:', error);
          // Puedes manejar el error de alguna manera (por ejemplo, mostrar un mensaje de error al usuario)
        });
    }
}
}
