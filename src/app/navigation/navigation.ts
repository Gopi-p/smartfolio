import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';

interface NavTarget {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Top bar -->
    <header class="fixed top-0 inset-x-0 z-50 border-b border-edge bg-night/85 backdrop-blur">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          (click)="closeMenu(); scrollToId('top', $event)"
          class="font-display font-bold text-xl text-ivory flex items-center gap-2"
        >
          <span class="inline-block w-2 h-2 rounded-full bg-coral"></span>
          gopinath<span class="text-coral">.</span>
        </a>

        <nav class="hidden md:flex items-center gap-7">
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="scrollToId(target.id, $event)"
              class="link-slide font-mono text-xs uppercase tracking-widest transition-colors"
              [class.text-coral]="active() === target.id"
              [class.text-mist]="active() !== target.id"
            >
              {{ target.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            (click)="openPalette()"
            class="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-edge hover:border-edge-hi text-fog hover:text-ivory transition-colors text-xs font-mono"
          >
            <span>jump to</span>
            <span class="kbd">⌘</span><span class="kbd">K</span>
          </button>

          <button
            type="button"
            (click)="toggleMenu()"
            class="md:hidden font-mono text-xs uppercase tracking-widest text-mist hover:text-coral"
            [attr.aria-expanded]="isOpen()"
          >
            {{ isOpen() ? 'close' : 'menu' }}
          </button>
        </div>
      </div>

      @if (isOpen()) {
        <nav class="md:hidden border-t border-edge bg-night-2 px-6 py-5 flex flex-col gap-4">
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="closeMenu(); scrollToId(target.id, $event)"
              class="font-display text-3xl text-ivory hover:text-coral transition-colors"
            >
              {{ target.label }}
            </a>
          }
          <button
            type="button"
            (click)="closeMenu(); openPalette()"
            class="self-start mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-edge text-mist text-xs font-mono"
          >
            <span>open palette</span>
            <span class="kbd">⌘K</span>
          </button>
        </nav>
      }
    </header>

    <!-- Side rail progress dots (desktop only) -->
    <aside
      class="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
      aria-hidden="true"
    >
      @for (target of targets; track target.id) {
        <a
          [href]="'#' + target.id"
          (click)="scrollToId(target.id, $event)"
          class="group relative flex items-center justify-end gap-3"
        >
          <span
            class="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-widest text-mist"
          >{{ target.label }}</span>
          <span
            class="block w-2 h-2 rounded-full transition-all"
            [class.bg-coral]="active() === target.id"
            [class.bg-edge-hi]="active() !== target.id"
            [class.scale-150]="active() === target.id"
          ></span>
        </a>
      }
    </aside>
  `,
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  readonly targets: NavTarget[] = [
    { id: 'about', label: 'about' },
    { id: 'work', label: 'work' },
    { id: 'skills', label: 'stack' },
    { id: 'contact', label: 'contact' },
  ];

  readonly isOpen = signal(false);
  readonly active = signal<string>('about');

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.active.set(visible.target.id);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    for (const target of this.targets) {
      const el = document.getElementById(target.id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  toggleMenu() { this.isOpen.update((v) => !v); }
  closeMenu() { this.isOpen.set(false); }

  scrollToId(id: string, event: Event) {
    event.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openPalette() {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }),
    );
  }
}
