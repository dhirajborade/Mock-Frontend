
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
      {id : 'NameCheck', endpointName : 'Name Check', url : 'namecheck'},
      {id : 'FLCaptchaGet', endpointName : 'Get FL Captcha', url : 'flcaptcha/get'},
      {id : 'FLCaptchaSend', endpointName : 'Send FL Captcha', url : 'flcaptcha/send'},
      {id : 'Questions', endpointName : 'Questions', url : 'questions'},
      {id : 'Verify', endpointName : 'Verify', url : 'verify'},
      {id : 'Reset', endpointName : 'Reset', url : 'reset'},
      {id : 'Forgot', endpointName : 'Forgot', url : 'forgot'},
      {id : 'UserDetails', endpointName : 'User Details', url : 'user/details'},
      {id : 'EditUserDetails', endpointName : 'Edit User Details', url : 'user/details/edit'},
      {id : 'UserAccountDetails', endpointName : 'User Account Details', url : 'user/account/details'},
      {id : 'EditUserAccount', endpointName : 'Edit User Account', url : 'user/account/edit'},
      {id : 'MyClaims', endpointName : 'My Claims', url : 'myclaims'},
      {id : 'SelectMyClaims', endpointName : 'Select My Claims', url : 'myclaims/select'},
      {id : 'Documents', endpointName : 'Documents', url : 'documents'},
      {id : 'AddDocuments', endpointName : 'Add Documents', url : 'documents/add'},
      {id : 'DeleteDocuments', endpointName : 'Delete Documents', url : 'documents/delete'},
      {id : 'DocumentsStatus', endpointName : 'Documents Status', url : 'documents/status'},
      {id : 'Form', endpointName : 'Form', url : 'form'},
      {id : 'AddForm', endpointName : 'Add Form', url : 'form/add'},
      {id : 'RightSignature', endpointName : 'Right Signature', url : 'rightsignature'},
      {id : 'SubmitClaims', endpointName : 'Submit Claims', url : 'submitclaims'},
      {id : 'Log', endpointName : 'Log', url : 'log'}
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
      case 'NameCheck': {
        this.endpointUrl = 'namecheck';
        break;
      }
      case 'FLCaptchaGet': {
        this.endpointUrl = 'flcaptcha/get';
        break;
      }
      case 'FLCaptchaSend': {
        this.endpointUrl = 'flcaptcha/send';
        break;
      }
      case 'Questions': {
        this.endpointUrl = 'questions';
        break;
      }
      case 'Verify': {
        this.endpointUrl = 'verify';
        break;
      }
      case 'Reset': {
        this.endpointUrl = 'reset';
        break;
      }
      case 'Forgot': {
        this.endpointUrl = 'forgot';
        break;
      }
      case 'UserDetails': {
        this.endpointUrl = 'user/details';
        break;
      }
      case 'EditUserDetails': {
        this.endpointUrl = 'user/details/edit';
        break;
      }
      case 'UserAccountDetails': {
        this.endpointUrl = 'user/account/details';
        break;
      }
      case 'EditUserAccount': {
        this.endpointUrl = 'user/account/edit';
        break;
      }
      case 'MyClaims': {
        this.endpointUrl = 'myclaims';
        break;
      }
      case 'SelectMyClaims': {
        this.endpointUrl = 'myclaims/select';
        break;
      }
      case 'Documents': {
        this.endpointUrl = 'documents';
        break;
      }
      case 'AddDocuments': {
        this.endpointUrl = 'documents/add';
        break;
      }
      case 'DeleteDocuments': {
        this.endpointUrl = 'documents/delete';
        break;
      }
      case 'DocumentsStatus': {
        this.endpointUrl = 'documents/status';
        break;
      }
      case 'Form': {
        this.endpointUrl = 'form';
        break;
      }
      case 'AddForm': {
        this.endpointUrl = 'form/add';
        break;
      }
      case 'RightSignature': {
        this.endpointUrl = 'rightsignature';
        break;
      }
      case 'SubmitClaims': {
        this.endpointUrl = 'submitclaims';
        break;
      }
      case 'Log': {
        this.endpointUrl = 'log';
        break;
      }

    }
  }
}