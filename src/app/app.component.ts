import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smartfolio';
  arrow = true;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
    if (typeof window !== 'undefined') {
      // browser code
      this.scrWidth = window.innerWidth;
      if (this.scrWidth <= 600) {
        this.arrow = false;
      } else {
        this.arrow = true;
      }
    }
  }

  constructor() {
    this.getScreenSize();
  }
}
