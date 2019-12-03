import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicInputs-host]'
})
export class DynamicInputsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}