import { Component } from '@angular/core';

import {Router} from "@angular/router";


@Component({
  selector: 'app-recaptcha',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></re-captcha>`,
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent {


  constructor(public router: Router) {
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);



    }


  }








