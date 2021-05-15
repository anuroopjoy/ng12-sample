import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyAppService } from './my-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = null;
  constructor(private userService: MyAppService) {}
  ngOnInit(): void {
    const params = new HttpParams().appendAll({ test: 'value', ping: 1 });
    this.userService.getUsers({ params });
  }
}
