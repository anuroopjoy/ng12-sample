import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const LOG_TOKEN = new HttpContextToken<boolean>(() => false);
export function logRequest(){
  return new HttpContext().set(LOG_TOKEN, true);
}
@Injectable()
export class ContextInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if(request.context.get(LOG_TOKEN) === true){
      console.log(`${request.url} is logged`)
    }
    return next.handle(request);
  }
}
