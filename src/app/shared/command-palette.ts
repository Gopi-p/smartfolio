import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

interface Action {
  id: string;
  label: string;
  hint: string;
  kind: 'jump' | 'copy' | 'open' | 'download';
  payload: string;
  keywords?: string;
}

@Component({
  selector: 'app-command-palette',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isOpen()) {
      <div
        class="fixed inset-0 z-[70] bg-board/70 backdrop-blur-sm flex items-start justify-center pt-[18vh] px-4"
        (click)="close()"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="w-full max-w-xl bg-panel border border-line-hi rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
          (click)="$event.stopPropagation()"
        >
          <!-- Search input -->
          <div class="flex items-center gap-3 px-5 py-4 border-b border-line">
            <span class="font-mono text-xs text-select">⌘</span>
            <input
              #searchInput
              type="text"
              [value]="query()"
              (input)="onInput($event)"
              (keydown)="onKey($event)"
              placeholder="Jump anywhere, or do something..."
              class="flex-1 bg-transparent border-none outline-none text-ink placeholder:text-meta font-display text-lg"
              autocomplete="off"
              spellcheck="false"
            />
            <button
              type="button"
              (click)="close()"
              class="font-mono text-[10px] text-meta hover:text-ink uppercase tracking-widest"
              aria-label="Close command palette"
            >
              esc
            </button>
          </div>

          <!-- Results -->
          <div class="max-h-[50vh] overflow-y-auto py-2">
            @if (filtered().length === 0) {
              <div class="px-5 py-6 text-meta text-sm">No match for "{{ query() }}".</div>
            }
            @for (action of filtered(); track action.id; let i = $index) {
              <button
                type="button"
                (click)="run(action)"
                (mouseenter)="cursor.set(i)"
                [attr.aria-selected]="cursor() === i"
                class="w-full text-left px-5 py-3 flex items-center gap-4 transition-colors"
                [class.bg-board]="cursor() === i"
              >
                <span
                  class="font-mono text-[10px] uppercase tracking-widest w-16 shrink-0"
                  [class.text-select]="cursor() === i"
                  [class.text-meta]="cursor() !== i"
                >
                  {{ kindLabel(action.kind) }}
                </span>
                <span class="flex-1 font-display text-base font-medium text-ink">{{
                  action.label
                }}</span>
                <span class="font-mono text-[11px] text-meta hidden sm:inline">{{
                  action.hint
                }}</span>
              </button>
            }
          </div>

          <!-- Footer hints -->
          <div
            class="px-5 py-3 border-t border-line flex items-center justify-between text-[10px] font-mono text-meta"
          >
            <div class="flex items-center gap-3">
              <span><span class="kbd">↑</span> <span class="kbd">↓</span> navigate</span>
              <span><span class="kbd">↵</span> select</span>
            </div>
            <span><span class="kbd">esc</span> close</span>
          </div>
        </div>
      </div>
    }
  `,
})
export class CommandPaletteComponent implements AfterViewInit {
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly isOpen = signal(false);
  readonly query = signal('');
  readonly cursor = signal(0);

  private readonly actions: Action[] = [
    {
      id: 'go-home',
      kind: 'jump',
      label: 'Top of the page',
      hint: 'section',
      payload: 'top',
      keywords: 'hero home start intro',
    },
    {
      id: 'go-work',
      kind: 'jump',
      label: 'The work',
      hint: 'section',
      payload: 'work',
      keywords: 'projects portfolio cases canvas planogram saas migration home server',
    },
    {
      id: 'go-story',
      kind: 'jump',
      label: 'Home server build story',
      hint: 'page',
      payload: '/work/home-server',
      keywords: 'home server cloud immich jellyfin cloudflare tunnel gopicraft story',
    },
    {
      id: 'go-journey',
      kind: 'jump',
      label: 'The journey',
      hint: 'section',
      payload: 'journey',
      keywords: 'about bio experience education timeline career record',
    },
    {
      id: 'go-principles',
      kind: 'jump',
      label: 'Principles',
      hint: 'section',
      payload: 'principles',
      keywords: 'approach philosophy values how i build maintainable scalable performance',
    },
    {
      id: 'go-specs',
      kind: 'jump',
      label: 'Tech specs',
      hint: 'section',
      payload: 'specs',
      keywords: 'skills stack tools technologies working set systems built',
    },
    {
      id: 'go-contact',
      kind: 'jump',
      label: 'Contact',
      hint: 'section',
      payload: 'contact',
      keywords: 'email phone reach contact say hi',
    },
    {
      id: 'copy-email',
      kind: 'copy',
      label: 'Copy email address',
      hint: 'clipboard',
      payload: 'p.gopinath.work@gmail.com',
      keywords: 'mail gmail address',
    },
    {
      id: 'copy-phone',
      kind: 'copy',
      label: 'Copy phone number',
      hint: 'clipboard',
      payload: '+91 63693 26257',
      keywords: 'tel mobile call',
    },
    {
      id: 'dl-resume',
      kind: 'download',
      label: 'Download resume as PDF',
      hint: '.pdf',
      payload: '/assets/Gopinath_P_Software_Developer.pdf',
      keywords: 'cv resume',
    },
    {
      id: 'open-github',
      kind: 'open',
      label: 'GitHub · @Gopi-p',
      hint: 'external',
      payload: 'https://github.com/Gopi-p',
      keywords: 'code repos github',
    },
    {
      id: 'open-linkedin',
      kind: 'open',
      label: 'LinkedIn · /in/p-gopinath',
      hint: 'external',
      payload: 'https://www.linkedin.com/in/p-gopinath/',
      keywords: 'linkedin profile',
    },
    {
      id: 'open-craft',
      kind: 'open',
      label: 'gopicraft.dev',
      hint: 'external',
      payload: 'https://gopicraft.dev',
      keywords: 'site blog craft workshop',
    },
    {
      id: 'mail-direct',
      kind: 'open',
      label: 'Compose new email',
      hint: 'mailto',
      payload: 'mailto:p.gopinath.work@gmail.com',
      keywords: 'email write compose',
    },
  ];

  readonly filtered = computed<Action[]>(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.actions;
    return this.actions.filter((a) => {
      const hay = `${a.label} ${a.keywords ?? ''} ${a.kind} ${a.payload}`.toLowerCase();
      return hay.includes(q);
    });
  });

  @HostListener('document:keydown', ['$event'])
  onGlobalKey(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.open();
    } else if (event.key === 'Escape' && this.isOpen()) {
      event.preventDefault();
      this.close();
    }
  }

  ngAfterViewInit() {
    // Focus handled in open()
  }

  open() {
    this.isOpen.set(true);
    this.query.set('');
    this.cursor.set(0);
    queueMicrotask(() => this.searchInput()?.nativeElement.focus());
  }

  close() {
    this.isOpen.set(false);
  }

  onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
    this.cursor.set(0);
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.cursor.update((c) => Math.min(c + 1, this.filtered().length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.cursor.update((c) => Math.max(c - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const action = this.filtered()[this.cursor()];
      if (action) this.run(action);
    }
  }

  kindLabel(kind: Action['kind']): string {
    switch (kind) {
      case 'jump':
        return 'jump';
      case 'copy':
        return 'copy';
      case 'open':
        return 'open';
      case 'download':
        return 'pdf';
    }
  }

  async run(action: Action) {
    switch (action.kind) {
      case 'jump':
        this.jumpTo(action.payload);
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(action.payload);
          this.toast.show(`Copied: ${action.payload}`);
        } catch {
          this.toast.show('Copy failed. Try long press.');
        }
        break;
      case 'open':
        window.open(
          action.payload,
          action.payload.startsWith('mailto:') ? '_self' : '_blank',
          'noopener,noreferrer',
        );
        break;
      case 'download': {
        const a = document.createElement('a');
        a.href = action.payload;
        a.download = action.payload.split('/').pop() ?? 'resume.pdf';
        a.click();
        this.toast.show('Downloading resume...');
        break;
      }
    }
    this.close();
  }

  private jumpTo(payload: string) {
    // Route payloads start with "/"; the rest are landing-page sections.
    if (payload.startsWith('/')) {
      this.router.navigateByUrl(payload);
      return;
    }
    // On the story page the landing sections don't exist: route home instead.
    if (!document.getElementById('top')) {
      this.router.navigate(['/'], { fragment: payload === 'top' ? undefined : payload });
      return;
    }
    if (payload === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(payload)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
