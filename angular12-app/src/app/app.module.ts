import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextInterceptor } from './context.interceptor';
import { MyAppDirective } from './my-app.directive';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [AppComponent, MyAppDirective, SampleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContextInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
