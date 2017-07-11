import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Claimfound Mock Front to test Backend RESTful APIs';
  inputText: string = "";

  constructor(appService: AppService) {
  }

  onClick() {
    
  }
}
