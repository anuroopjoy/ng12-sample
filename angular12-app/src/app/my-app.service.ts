import { HttpClient } from '@angular/common/http';
import { forwardRef, Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable({
  providedIn: forwardRef(() => AppModule),
})
export class MyAppService {
  constructor(private http: HttpClient) {
    console.log('my service created');
  }

  getUsers(params?: any) {
    return this.http.get('http://localhost:3001/users', params).toPromise();
  }
}
