import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationsCount = 20

  updateNotificationsCount(count: number) {
    this.notificationsCount = count;
    }
}
