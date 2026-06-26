import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  index: string;
  target: string;
}

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-rule">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#masthead"
          (click)="closeMenu()"
          class="font-display italic text-2xl tracking-tight text-paper hover:text-accent transition-colors"
        >
          gp<span class="text-accent">.</span>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          @for (link of links; track link.target) {
            <a
              [href]="'#' + link.target"
              class="group flex items-baseline gap-2 text-paper hover:text-accent transition-colors"
            >
              <span class="font-mono text-[10px] text-paper-dim group-hover:text-accent transition-colors">{{ link.index }}</span>
              <span class="font-mono text-xs tracking-wide lowercase">{{ link.label }}</span>
            </a>
          }
        </nav>

        <button
          type="button"
          (click)="toggleMenu()"
          [attr.aria-expanded]="isMenuOpen()"
          aria-label="Toggle menu"
          class="md:hidden text-paper hover:text-accent transition-colors"
        >
          <span class="font-mono text-xs uppercase tracking-widest">
            {{ isMenuOpen() ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

      @if (isMenuOpen()) {
        <div class="md:hidden border-t border-rule bg-ink">
          <nav class="px-6 py-6 flex flex-col gap-5">
            @for (link of links; track link.target) {
              <a
                [href]="'#' + link.target"
                (click)="closeMenu()"
                class="flex items-baseline gap-3 text-paper hover:text-accent transition-colors"
              >
                <span class="font-mono text-[10px] text-paper-dim">{{ link.index }}</span>
                <span class="font-display text-2xl italic">{{ link.label }}</span>
              </a>
            }
          </nav>
        </div>
      }
    </header>
  `,
})
export class NavigationComponent {
  readonly links: NavLink[] = [
    { index: '01', label: 'notes', target: 'notes' },
    { index: '02', label: 'work', target: 'work' },
    { index: '03', label: 'capabilities', target: 'capabilities' },
    { index: '04', label: 'correspond', target: 'correspond' },
  ];

  readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
