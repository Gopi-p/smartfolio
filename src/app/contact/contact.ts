import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { MagneticDirective } from '../shared/magnetic.directive';
import { ToastService } from '../shared/toast.service';

interface Channel {
  label: string;
  value: string;
  href: string;
  copyable: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> contact</div>

      <div class="mt-7 mb-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-7">
          <h1 class="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Got a problem worth <span class="text-select glow">solving?</span>
          </h1>
          <p class="mt-6 text-body text-lg max-w-xl leading-relaxed">
            I read every message. Quickest path is email. Or hit
            <span class="kbd">⌘</span><span class="kbd">K</span> and search "copy email", or pick
            any channel below.
          </p>
        </div>
        <div class="md:col-span-4 md:col-start-9 flex md:justify-end items-start">
          <a
            appMagnetic
            href="mailto:p.gopinath.work@gmail.com"
            class="inline-flex items-center gap-3 px-8 py-5 rounded-md bg-select text-board font-display font-bold text-xl hover:bg-select-deep transition-colors"
          >
            <span>say hi</span>
            <span class="font-mono text-base" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <!-- Channels -->
      <div appReveal class="grid grid-cols-1 md:grid-cols-2 gap-3">
        @for (channel of channels; track channel.label) {
          <div class="panel panel-hover group flex items-center justify-between gap-4 p-5">
            <a
              [href]="channel.href"
              [target]="channel.href.startsWith('http') ? '_blank' : null"
              [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
              class="flex-1 min-w-0"
            >
              <div
                class="font-mono text-[10px] uppercase tracking-[0.14em] text-meta group-hover:text-select transition-colors"
              >
                {{ channel.label }}
              </div>
              <div class="font-mono text-sm md:text-base text-ink truncate mt-1.5">
                {{ channel.value }}
              </div>
            </a>
            @if (channel.copyable) {
              <button
                type="button"
                (click)="copy(channel)"
                class="shrink-0 px-3 py-2 rounded-md border border-line hover:border-select text-meta hover:text-select text-xs font-mono uppercase tracking-[0.14em] transition-colors"
                [attr.aria-label]="'Copy ' + channel.label"
              >
                copy
              </button>
            } @else {
              <a
                [href]="channel.href"
                [target]="channel.href.startsWith('http') ? '_blank' : null"
                [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
                class="shrink-0 px-3 py-2 rounded-md border border-line hover:border-select text-meta hover:text-select text-xs font-mono uppercase tracking-[0.14em] transition-colors"
              >
                open ↗
              </a>
            }
          </div>
        }
      </div>

      <!-- Resume closer -->
      <div
        appReveal
        class="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-line"
      >
        <div>
          <div class="eyebrow">prefer the full version?</div>
          <p class="mt-2 font-display text-2xl font-bold">Grab the PDF resume.</p>
        </div>
        <a
          appMagnetic
          href="/assets/Gopinath_P_Software_Developer.pdf"
          download="Gopinath_P_Software_Developer.pdf"
          class="inline-flex items-center gap-3 px-6 py-4 rounded-md border border-line-hi bg-panel hover:border-select transition-colors"
        >
          <span
            class="font-mono text-[11px] uppercase tracking-[0.14em] text-select"
            aria-hidden="true"
            >↓ pdf</span
          >
          <span class="font-display text-lg font-semibold">Download résumé</span>
        </a>
      </div>
    </div>
  `,
})
export class ContactComponent {
  private readonly toast = inject(ToastService);

  readonly channels: Channel[] = [
    {
      label: 'Email',
      value: 'p.gopinath.work@gmail.com',
      href: 'mailto:p.gopinath.work@gmail.com',
      copyable: true,
    },
    { label: 'Phone', value: '+91 63693 26257', href: 'tel:+916369326257', copyable: true },
    {
      label: 'LinkedIn',
      value: '/in/p-gopinath',
      href: 'https://www.linkedin.com/in/p-gopinath/',
      copyable: false,
    },
    { label: 'GitHub', value: '@Gopi-p', href: 'https://github.com/Gopi-p', copyable: false },
    { label: 'Workshop', value: 'gopicraft.dev', href: 'https://gopicraft.dev', copyable: false },
    {
      label: 'Location',
      value: 'Chennai, India · IST',
      href: 'https://maps.google.com/?q=Chennai',
      copyable: false,
    },
  ];

  async copy(channel: Channel) {
    try {
      await navigator.clipboard.writeText(channel.value);
      this.toast.show(`${channel.label} copied`);
    } catch {
      this.toast.show('Copy failed. Long press to select.');
    }
  }
}
