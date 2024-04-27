import { Component } from '@angular/core';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrl: './book-management.component.css',
})
export class BookManagementComponent {
  activated = {
    'home': false,
    'book': true,
    'user': false,
    'report': false
  }
}
