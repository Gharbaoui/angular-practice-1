import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  constructor(private elmn: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('skyblue');
  }

  @HostListener(`mouseleave`)
  onMouseLeave()
  {
    this.highlight(``);
  }

  private highlight(color: string) {
    this.elmn.nativeElement.style.backgroundColor = color;
  }

}
