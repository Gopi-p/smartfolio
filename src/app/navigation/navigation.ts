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
          aria-label="Gopinath, back to top"
        >
          <span class="inline-block w-2 h-2 rounded-full bg-coral" aria-hidden="true"></span>
          gopinath<span class="text-coral" aria-hidden="true">.</span>
        </a>

        <nav class="hidden md:flex items-center gap-7" aria-label="Primary">
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="scrollToId(target.id, $event)"
              class="link-slide font-mono text-xs uppercase tracking-widest transition-colors"
              [class.text-coral]="active() === target.id"
              [class.text-mist]="active() !== target.id"
              [attr.aria-current]="active() === target.id ? 'true' : null"
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
            <span class="kbd" aria-hidden="true">⌘</span><span class="kbd" aria-hidden="true">K</span>
          </button>

          <button
            type="button"
            (click)="toggleMenu()"
            class="md:hidden font-mono text-xs uppercase tracking-widest text-mist hover:text-coral"
            aria-controls="mobile-menu"
            [attr.aria-expanded]="isOpen()"
            [attr.aria-label]="isOpen() ? 'Close menu' : 'Open menu'"
          >
            {{ isOpen() ? 'close' : 'menu' }}
          </button>
        </div>
      </div>

      @if (isOpen()) {
        <nav
          id="mobile-menu"
          class="md:hidden border-t border-edge bg-night-2 px-6 py-5 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="closeMenu(); scrollToId(target.id, $event)"
              class="font-display text-3xl text-ivory hover:text-coral transition-colors"
              [attr.aria-current]="active() === target.id ? 'true' : null"
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
            <span class="kbd" aria-hidden="true">⌘K</span>
          </button>
        </nav>
      }
    </header>

    <!-- Side rail progress dots (desktop only, decorative duplicate of primary nav) -->
    <aside
      class="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
      aria-hidden="true"
    >
      @for (target of targets; track target.id) {
        <a
          [href]="'#' + target.id"
          (click)="scrollToId(target.id, $event)"
          tabindex="-1"
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
    { id: 'built', label: 'built' },
    { id: 'work', label: 'work' },
    { id: 'philosophy', label: 'approach' },
    { id: 'skills', label: 'stack' },
    { id: 'contact', label: 'contact' },
  ];

  /** Sections tracked for active highlight + URL hash, including the hero ("top"). */
  private readonly trackedIds = ['top', ...this.targets.map((t) => t.id)];

  readonly isOpen = signal(false);
  readonly active = signal<string>('');

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id;
        // Hero is "top": nothing highlighted, and the URL drops back to the base path.
        this.active.set(id === 'top' ? '' : id);
        this.syncHash(id);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    for (const id of this.trackedIds) {
      const el = document.getElementById(id);
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
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.active.set(id === 'top' ? '' : id);
    this.syncHash(id);
  }

  /** Reflect the current section in the address bar without polluting history. */
  private syncHash(id: string) {
    const base = location.pathname + location.search;
    const next = id === 'top' ? base : `${base}#${id}`;
    const current = location.pathname + location.search + location.hash;
    if (current !== next) {
      history.replaceState(history.state, '', next);
    }
  }

  openPalette() {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }),
    );
  }
}
