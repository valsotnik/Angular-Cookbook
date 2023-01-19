import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input()
    set appIfNot(value: boolean) {
      (value === false) ? this.viewContainerRef.createEmbeddedView(this.templateRef) :
                          this.viewContainerRef.clear()
    }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
