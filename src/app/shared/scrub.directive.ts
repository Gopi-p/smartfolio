import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

/**
 * Scroll-lit copy: the host rests dim and lights up while it crosses the
 * middle band of the viewport, both directions (product-page style).
 */
@Directive({
  selector: '[appScrub]',
})
export class ScrubDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    const el = this.host.nativeElement;
    el.classList.add('scrub');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-lit', entry.isIntersecting);
        }
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
