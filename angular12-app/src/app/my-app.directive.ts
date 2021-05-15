import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMyApp]'
})
export class MyAppDirective {

  @Input() public myinput = 1;
  constructor() { }

}
