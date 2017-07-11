import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Claimfound Mock Frontend to test Backend RESTful APIs';
  inputText: string = "";

  constructor(private appService: AppService) {
  }

  onClick() {
    this.appService.post(this.inputText, 'newuser');
  }
}
