import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockFrontendComponent } from './mock-frontend/mock-frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    MockFrontendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
