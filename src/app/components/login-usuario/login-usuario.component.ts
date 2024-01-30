import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';

@Component({
    selector: 'app-login-usuario',
    templateUrl: './login-usuario.component.html',
    styleUrls: ['./login-usuario.component.css'],
})
export class LoginUsuarioComponent {
    usuario = new Usuario();

    constructor(
        private service: GeneralService,
        public router: Router
    ) {}

    login() {
        this.service.login(this.usuario).subscribe((data: any) => {
            console.log(data);
            console.log(this.usuario);
            localStorage.setItem('token', data['token']);
            localStorage.setItem('username', this.usuario.username);

            this.router
                .navigate(['/apollo'])
                .then(() => (window.location.href = '/apollo'));
        });
    }
}
