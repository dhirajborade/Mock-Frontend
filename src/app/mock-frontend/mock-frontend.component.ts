
import { MockFrontendService } from './mock-frontend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-frontend',
  templateUrl: './mock-frontend.component.html',
  styleUrls: ['./mock-frontend.component.css']
})
export class MockFrontendComponent implements OnInit {

  private inputText: string;
  private inputData: string;
  private response: string;
  private responseData: string;
  private showText: boolean;
  private endpointUrl: string;
  private endpoints: Array<Object>;
  private selectedEndpoint: string;
  
  constructor(private mockService: MockFrontendService) { }

  ngOnInit() {
    this.inputText = '';
    this.inputData = '';
    this.showText = false;
    this.endpointUrl = '';
    this.endpoints = [
      {id : '', endpointName : '---Select Endpoint---', url : ''},
      {id : 'NewUser', endpointName : 'New User', url : 'newuser'},
      {id : 'Login', endpointName : 'Login', url : 'login'},
      {id : 'NameCheck', endpointName : 'Name Check', url : ''},
      {id : 'FLCaptchaGet', endpointName : 'Get FL Captcha', url : ''}
    ];
  }

  onClickTestAPI() {
    this.inputData = JSON.parse(this.inputText || null);
    this.mockService.postMethod(this.inputData, this.endpointUrl).subscribe(result => {
      this.response = JSON.stringify(result, undefined, 4);
    });
    this.responseData = this.response;
    //this.responseData = this.mockService.showOutput(this.response);
  }

  onClickPrettyPrint() {
    this.inputText = JSON.parse(this.inputText);
    this.inputText = JSON.stringify(this.inputText, undefined, 4);
  }

  onChange(newValue) {
    if (newValue == '') {
      this.showText = false;
    } else {
      this.showText = true;
    }
    switch(newValue) {
      case 'NewUser': {
        this.endpointUrl = 'newuser';
        break;
      }
      case 'Login': {
        this.endpointUrl = 'login';
        break;
      }
    }
  }
}
