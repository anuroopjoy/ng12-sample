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

const contextToken = new HttpContextToken<boolean>(() => false);

export const logRequest = () => {
  return new HttpContext().set(contextToken, true);
};

@Injectable()
export class ContextInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.context.get(contextToken) === true) {
      console.log(`request ${request.url} logged`);
    }
    return next.handle(request);
  }
}
