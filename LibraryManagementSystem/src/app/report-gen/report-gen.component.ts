import { Component } from '@angular/core';

@Component({
  selector: 'app-report-gen',
  templateUrl: './report-gen.component.html',
  styleUrl: './report-gen.component.css'
})
export class ReportGenComponent {
  activated = {
    'home': false,
    'book': false,
    'user': false,
    'report': true
  }
}
