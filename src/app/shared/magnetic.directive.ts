import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  host: { class: 'magnetic' },
})
export class MagneticDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly pull = 0.25;

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse') return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (event.clientX - cx) * this.pull;
    const dy = (event.clientY - cy) * this.pull;
    el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
  }

  @HostListener('pointerleave')
  onLeave() {
    this.host.nativeElement.style.transform = 'translate(0, 0)';
  }
}
