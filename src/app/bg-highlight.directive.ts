import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  constructor(private elmn: ElementRef) {
    this.elmn.nativeElement.style.backgroundColor = `red`;
  }

}
