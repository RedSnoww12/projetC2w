import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
  }

  private setBorder(color: string) {
    let border = 'solid 2px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
