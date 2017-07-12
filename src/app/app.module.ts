import { HttpModule } from '@angular/http';
import { MockFrontendService } from './mock-frontend/mock-frontend.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { MockFrontendComponent } from './mock-frontend/mock-frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    MockFrontendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MockFrontendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
