import { Component, OnInit } from '@angular/core';
import { logRequest } from '../context.interceptor';
import { MyAppService } from '../my-app.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [
    `
      nav {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          display: inline-block;
        }

        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }
    `,
  ],
})
export class SampleComponent implements OnInit {
  public age = 0;
  constructor(private userService: MyAppService) {}

  ngOnInit(): void {
    this.userService.getUsers({
      context: logRequest(),
    });
  }
}
