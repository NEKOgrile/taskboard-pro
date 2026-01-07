import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Notification {

  // afficher une notification
  show(message: string): void {
    alert(message);
  }
}
