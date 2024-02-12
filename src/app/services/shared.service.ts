import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private Chat = new BehaviorSubject<boolean>(false);
  abrirChat$ = this.Chat.asObservable();

  abrirChat() {
    this.Chat.next(true);
  }

}
