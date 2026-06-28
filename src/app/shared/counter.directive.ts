import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appCounter]',
})
export class CounterDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private rafId?: number;

  readonly to = input.required<number>({ alias: 'appCounter' });
  readonly duration = input(1400);
  readonly suffix = input('');

  ngAfterViewInit() {
    const el = this.host.nativeElement;
    el.textContent = '0' + this.suffix();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate();
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 },
    );
    this.observer.observe(el);
  }

  private animate() {
    const target = this.to();
    const duration = this.duration();
    const suffix = this.suffix();

    // Respect reduced-motion: show the final value without counting up.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.host.nativeElement.textContent = target + suffix;
      return;
    }

    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      this.host.nativeElement.textContent = value + suffix;
      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };
    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
