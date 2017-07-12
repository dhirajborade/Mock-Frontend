
import { MockFrontendService } from './mock-frontend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-frontend',
  templateUrl: './mock-frontend.component.html',
  styleUrls: ['./mock-frontend.component.css']
})
export class MockFrontendComponent implements OnInit {

  private inputText: string = '{"email":"j8kkr@vektik.com","password":"12345678"}';
  private inputData = JSON.parse(this.inputText || null);
  private response;
  
  constructor(private mockService: MockFrontendService) { }

  ngOnInit() {
  }

  onClickTestAPI() {
    console.log(this.inputText);
    console.log(this.inputData);
    this.mockService.postMethod(this.inputData, 'login').subscribe(result => {
      this.response = JSON.stringify(result, undefined, 4);
    });
  }

  onClickPrettyPrint() {
    this.inputText = JSON.parse(this.inputText);
    this.inputText = JSON.stringify(this.inputText, undefined, 4);
  }
}
