import { Component, OnInit } from '@angular/core';
import { logRequest } from './context.interceptor';
import { MyAppService } from './my-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angular12-app';
  constructor(private myService: MyAppService) {}
  async ngOnInit() {
    await this.myService.getUsers({
      context: logRequest()
    });
    console.log('api completed')
  }
}
