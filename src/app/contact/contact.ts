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
    <section id="contact" class="relative py-24 md:py-36" aria-labelledby="contact-heading">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2
          id="contact-heading"
          appReveal
          class="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.02]"
        >
          Got a problem<br />
          worth <span class="grad">solving?</span>
        </h2>
        <p appReveal class="mt-7 text-body text-lg leading-relaxed max-w-xl mx-auto">
          I read every message. Quickest path is email. Or hit
          <span class="kbd">⌘</span><span class="kbd">K</span> and search "copy email".
        </p>

        <div appReveal class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            appMagnetic
            href="mailto:p.gopinath.work@gmail.com"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-board font-bold text-base hover:bg-select transition-colors"
          >
            Say hi <span aria-hidden="true">→</span>
          </a>
          <a
            appMagnetic
            href="/assets/Gopinath_P_Software_Developer.pdf"
            download="Gopinath_P_Software_Developer.pdf"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-line-hi text-ink text-base hover:border-select hover:text-select transition-colors"
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>

        <!-- Channels -->
        <div appReveal class="mt-16 max-w-xl mx-auto text-left">
          @for (channel of channels; track channel.label) {
            <div class="spec-row items-center">
              <div class="text-meta text-sm">{{ channel.label }}</div>
              <div class="flex items-center justify-between gap-4 min-w-0">
                <a
                  [href]="channel.href"
                  [target]="channel.href.startsWith('http') ? '_blank' : null"
                  [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
                  class="text-[15px] text-ink truncate hover:text-select transition-colors"
                >
                  {{ channel.value }}
                </a>
                @if (channel.copyable) {
                  <button
                    type="button"
                    (click)="copy(channel)"
                    class="shrink-0 px-3 py-1 rounded-full border border-line hover:border-select text-meta hover:text-select text-xs transition-colors"
                    [attr.aria-label]="'Copy ' + channel.label"
                  >
                    Copy
                  </button>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
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
