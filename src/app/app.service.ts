
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class AppService {
    
    private serverUrl = "http://0.0.0.0:5000/";
    
    constructor (private http: Http, public router: Router) {}
    
    post(data: any, url: string, token?: string): Observable<any> {
        if (token) {
            var params = this.prePost(data, url, token)
        } else {
            var params = this.prePost(data, url)
        }
        return this.http.post(params['postUrl'], params['body'], params['options']);
    }
    
    prePost(data: any, url: string, token?: string) {
        var dataCopy = JSON.parse(JSON.stringify(data));
        if (token) {
            dataCopy['token'] = token
        }
        
        let body = JSON.stringify(dataCopy);
        let logBody = JSON.stringify(dataCopy);
        var postUrl = this.serverUrl + url;
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
}