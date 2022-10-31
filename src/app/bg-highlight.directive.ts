import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  @Input() appBgHighlight = '';

  constructor(private elmn: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appBgHighlight);
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
