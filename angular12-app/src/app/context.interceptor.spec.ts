import { TestBed } from '@angular/core/testing';

import { ContextInterceptor } from './context.interceptor';

describe('ContextInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContextInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContextInterceptor = TestBed.inject(ContextInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
