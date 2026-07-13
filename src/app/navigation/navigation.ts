import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Desktop: file-tree rail -->
    <aside
      class="hidden lg:flex fixed inset-y-0 left-0 z-50 w-[288px] flex-col border-r border-line bg-panel/60 backdrop-blur"
    >
      <!-- Identity -->
      <div class="px-6 pt-7 pb-5 border-b border-line">
        <a routerLink="/" class="font-display font-bold text-xl tracking-tight">
          gopinath<span class="text-select">.</span>p<span
            class="caret text-select"
            aria-hidden="true"
            >_</span
          >
        </a>
        <div class="mt-1.5 font-mono text-[10px] text-meta">software engineer · chennai</div>
        <div
          class="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ok"
        >
          <span class="pulse-dot" aria-hidden="true"></span>
          available for new work
        </div>
      </div>

      <!-- Tree -->
      <nav class="flex-1 overflow-y-auto px-4 py-5 font-mono text-[13px]" aria-label="Primary">
        <a
          routerLink="/"
          routerLinkActive="is-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="tree-link"
        >
          <span class="glyph" aria-hidden="true">├</span>
          <span>readme.md</span>
        </a>

        <a routerLink="/work" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">├</span>
          <span>work/</span>
        </a>
        <a routerLink="/work" class="tree-link is-child">
          <span class="glyph" aria-hidden="true">│&nbsp;&nbsp;├</span>
          <span>001-planogram-canvas</span>
        </a>
        <a routerLink="/work" class="tree-link is-child">
          <span class="glyph" aria-hidden="true">│&nbsp;&nbsp;├</span>
          <span>002-saas-rebuild</span>
        </a>
        <a routerLink="/work" class="tree-link is-child">
          <span class="glyph" aria-hidden="true">│&nbsp;&nbsp;├</span>
          <span>003-angular-11-to-17</span>
        </a>
        <a routerLink="/work/home-server" routerLinkActive="is-active" class="tree-link is-child">
          <span class="glyph" aria-hidden="true">│&nbsp;&nbsp;└</span>
          <span>004-home-server <span class="text-select">↗</span></span>
        </a>

        <a routerLink="/systems" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">├</span>
          <span>systems</span>
        </a>
        <a routerLink="/log" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">├</span>
          <span>log</span>
        </a>
        <a routerLink="/stack" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">├</span>
          <span>stack.json</span>
        </a>
        <a routerLink="/runbook" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">├</span>
          <span>runbook</span>
        </a>
        <a routerLink="/contact" routerLinkActive="is-active" class="tree-link">
          <span class="glyph" aria-hidden="true">└</span>
          <span>contact</span>
        </a>
      </nav>

      <!-- Rail footer -->
      <div class="px-6 py-5 border-t border-line space-y-2.5">
        <div class="flex items-center justify-between font-mono text-[10px] text-meta">
          <span>up {{ uptime() }}</span>
          <span class="tabular-nums">{{ clock() }} IST</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3 font-mono text-[10px]">
            <a
              href="https://github.com/Gopi-p"
              target="_blank"
              rel="noopener noreferrer"
              class="text-meta hover:text-select transition-colors"
              >github</a
            >
            <a
              href="https://www.linkedin.com/in/p-gopinath/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-meta hover:text-select transition-colors"
              >linkedin</a
            >
            <a
              href="https://gopicraft.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-meta hover:text-select transition-colors"
              >gopicraft</a
            >
          </div>
          <button
            type="button"
            (click)="openPalette()"
            class="inline-flex items-center gap-1 text-meta hover:text-ink transition-colors"
            aria-label="Open command palette"
          >
            <span class="kbd">⌘</span><span class="kbd">K</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Mobile: top bar + tree overlay -->
    <header
      class="lg:hidden fixed top-0 inset-x-0 z-50 border-b border-line bg-board/90 backdrop-blur"
    >
      <div class="h-14 px-5 flex items-center justify-between">
        <a routerLink="/" (click)="closeMenu()" class="font-display font-bold text-lg">
          gopinath<span class="text-select">.</span>p
        </a>
        <div class="flex items-center gap-4">
          <span
            class="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ok"
          >
            <span class="pulse-dot" aria-hidden="true"></span>
            available
          </span>
          <button
            type="button"
            (click)="toggleMenu()"
            class="font-mono text-[11px] uppercase tracking-[0.14em] text-body hover:text-select"
            aria-controls="mobile-tree"
            [attr.aria-expanded]="isOpen()"
            [attr.aria-label]="isOpen() ? 'Close menu' : 'Open menu'"
          >
            {{ isOpen() ? 'close' : 'menu' }}
          </button>
        </div>
      </div>

      @if (isOpen()) {
        <nav
          id="mobile-tree"
          class="border-t border-line bg-panel px-5 py-4 font-mono text-sm flex flex-col"
          aria-label="Mobile navigation"
        >
          <a
            routerLink="/"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">├</span><span>readme.md</span>
          </a>
          <a
            routerLink="/work"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">├</span><span>work/</span>
          </a>
          <a
            routerLink="/work/home-server"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            class="tree-link is-child"
          >
            <span class="glyph" aria-hidden="true">│&nbsp;&nbsp;└</span>
            <span>004-home-server <span class="text-select">↗</span></span>
          </a>
          <a
            routerLink="/systems"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">├</span><span>systems</span>
          </a>
          <a routerLink="/log" (click)="closeMenu()" routerLinkActive="is-active" class="tree-link">
            <span class="glyph" aria-hidden="true">├</span><span>log</span>
          </a>
          <a
            routerLink="/stack"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">├</span><span>stack.json</span>
          </a>
          <a
            routerLink="/runbook"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">├</span><span>runbook</span>
          </a>
          <a
            routerLink="/contact"
            (click)="closeMenu()"
            routerLinkActive="is-active"
            class="tree-link"
          >
            <span class="glyph" aria-hidden="true">└</span><span>contact</span>
          </a>
        </nav>
      }
    </header>
  `,
  styles: `
    .tree-link {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.4rem 0.5rem;
      border-radius: 6px;
      color: var(--color-body);
      transition:
        color 150ms ease,
        background-color 150ms ease;
    }
    .tree-link:hover {
      color: var(--color-ink);
      background: var(--color-panel-2);
    }
    .tree-link.is-active {
      color: var(--color-select);
      background: var(--color-panel-2);
    }
    .tree-link .glyph {
      color: var(--color-line-hi);
      flex-shrink: 0;
    }
    .tree-link.is-child {
      font-size: 0.86em;
    }
    .caret {
      animation: blink 1.1s steps(1) infinite;
    }
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .caret {
        animation: none;
      }
    }
  `,
})
export class NavigationComponent {
  readonly isOpen = signal(false);
  readonly clock = signal('--:--:--');
  readonly uptime = signal('0y 000d');

  /** Career start, used by the uptime readout in the rail footer. */
  private readonly epoch = new Date('2021-06-01T00:00:00+05:30').getTime();

  constructor() {
    const tick = () => {
      this.clock.set(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }).format(new Date()),
      );
      let sec = Math.max(0, Math.floor((Date.now() - this.epoch) / 1000));
      const years = Math.floor(sec / 31557600);
      sec -= years * 31557600;
      const days = Math.floor(sec / 86400);
      this.uptime.set(`${years}y ${String(days).padStart(3, '0')}d`);
    };
    tick();
    const timer = setInterval(tick, 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }

  toggleMenu() {
    this.isOpen.update((v) => !v);
  }
  closeMenu() {
    this.isOpen.set(false);
  }

  openPalette() {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }),
    );
  }
}
