import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  host: {
    class: 'magnetic',
    '(pointermove)': 'onMove($event)',
    '(pointerleave)': 'onLeave()',
  },
})
export class MagneticDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly pull = 0.25;

  onMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || this.prefersReducedMotion()) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (event.clientX - cx) * this.pull;
    const dy = (event.clientY - cy) * this.pull;
    el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
  }

  onLeave() {
    this.host.nativeElement.style.transform = 'translate(0, 0)';
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
