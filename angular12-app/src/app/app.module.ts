import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextInterceptor } from './context.interceptor';
import { SampleComponent } from './sample/sample.component';
import { MyAppDirective } from './my-app.directive';

@NgModule({
  declarations: [AppComponent, SampleComponent, MyAppDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContextInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
