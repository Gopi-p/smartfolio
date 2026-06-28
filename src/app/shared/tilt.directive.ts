import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  host: {
    class: 'tilt-card',
    '(pointermove)': 'onMove($event)',
    '(pointerleave)': 'onLeave()',
  },
})
export class TiltDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly maxTilt = 8;

  onMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || this.prefersReducedMotion()) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (event.clientX - cx) / (rect.width / 2);
    const dy = (event.clientY - cy) / (rect.height / 2);
    const rotateY = dx * this.maxTilt;
    const rotateX = -dy * this.maxTilt;
    el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }

  onLeave() {
    this.host.nativeElement.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
