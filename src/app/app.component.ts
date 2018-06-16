import { Component } from '@angular/core';
import { NavigationService } from './pages/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  nextPage: string;

  constructor(private navService: NavigationService) {
    this.navService.nextPage.subscribe((path) => {
      this.nextPage = path;
    });
  }
}
