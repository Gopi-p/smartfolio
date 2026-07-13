import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface NavTarget {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-board/80 backdrop-blur-md">
      <div class="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between gap-6">
        <a
          href="#top"
          (click)="closeMenu(); scrollToId('top', $event)"
          class="font-display font-bold text-[15px] tracking-tight"
          aria-label="Gopinath, back to top"
        >
          Gopinath P
        </a>

        <nav class="hidden md:flex items-center gap-7" aria-label="Primary">
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="scrollToId(target.id, $event)"
              class="text-[13px] text-body hover:text-ink transition-colors"
            >
              {{ target.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            (click)="openPalette()"
            class="hidden md:inline-flex items-center gap-1.5 text-meta hover:text-ink transition-colors"
            aria-label="Open command palette"
          >
            <span class="kbd" aria-hidden="true">⌘</span
            ><span class="kbd" aria-hidden="true">K</span>
          </button>
          <a
            href="#contact"
            (click)="closeMenu(); scrollToId('contact', $event)"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-ink text-board text-[13px] font-semibold hover:bg-select transition-colors"
          >
            Get in touch
          </a>
          <button
            type="button"
            (click)="toggleMenu()"
            class="md:hidden text-[13px] font-medium text-body hover:text-ink"
            aria-controls="mobile-menu"
            [attr.aria-expanded]="isOpen()"
            [attr.aria-label]="isOpen() ? 'Close menu' : 'Open menu'"
          >
            {{ isOpen() ? 'Close' : 'Menu' }}
          </button>
        </div>
      </div>

      @if (isOpen()) {
        <nav
          id="mobile-menu"
          class="md:hidden border-t border-line bg-board/95 backdrop-blur px-6 py-6 flex flex-col gap-5"
          aria-label="Mobile navigation"
        >
          @for (target of targets; track target.id) {
            <a
              [href]="'#' + target.id"
              (click)="closeMenu(); scrollToId(target.id, $event)"
              class="font-display text-2xl font-bold text-ink hover:text-select transition-colors"
            >
              {{ target.label }}
            </a>
          }
        </nav>
      }
    </header>
  `,
})
export class NavigationComponent {
  readonly targets: NavTarget[] = [
    { id: 'work', label: 'Work' },
    { id: 'journey', label: 'Journey' },
    { id: 'principles', label: 'Principles' },
    { id: 'specs', label: 'Specs' },
  ];

  readonly isOpen = signal(false);

  private readonly router = inject(Router);

  toggleMenu() {
    this.isOpen.update((v) => !v);
  }
  closeMenu() {
    this.isOpen.set(false);
  }

  scrollToId(id: string, event: Event) {
    event.preventDefault();
    // On the story page the landing sections don't exist: route home instead.
    if (!document.getElementById('top')) {
      this.router.navigate(['/'], { fragment: id === 'top' ? undefined : id });
      return;
    }
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openPalette() {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }),
    );
  }
}
