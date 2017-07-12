
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MockFrontendService {
  
  constructor(private http: Http) { }

  private serverUrl = "http://0.0.0.0:5000/";

  postMethod(data: any, url: string) {
    let params = this.prePost(data, url);
    return this.http.post(params['postUrl'], params['body'], params['options']).map(this.extractData);
  }

  prePost(data: any, url: string) {
    let dataCopy = JSON.parse(JSON.stringify(data));
    let body = JSON.stringify(dataCopy);
    let postUrl = this.serverUrl + url
    let options = this.createOptions();
    return {
        'postUrl': postUrl,
        'body': body,
        'options': options
    }
  }

  createOptions() {
      let headers = new Headers({
          'Content-Type': 'application/json'
      });
      return new RequestOptions({ headers: headers });
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error("Error");
    }
    let body = res.json();
    return body || { };
  }
}
