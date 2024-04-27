import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {
  activated = {
    'home': true,
    'book': false,
    'user': false,
    'report': false
  }
}
