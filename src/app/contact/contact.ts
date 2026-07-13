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
    <section id="contact" class="relative py-24 md:py-32 bg-night-2/30" aria-labelledby="contact-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-7">
            <span class="eyebrow">06 · Contact</span>
            <h2 id="contact-heading" class="mt-4 font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Got a problem<br/>
              worth <span class="text-coral italic">solving?</span>
            </h2>
            <p class="mt-6 text-mist text-lg max-w-xl">
              I read every message. Quickest path is email. Copy any detail below,
              or pick a channel that suits you.
            </p>
          </div>

          <!-- Magnetic CTA -->
          <div class="md:col-span-4 md:col-start-9 flex md:justify-end items-start">
            <a
              appMagnetic
              href="mailto:p.gopinath.work@gmail.com"
              class="group inline-flex flex-col items-center justify-center w-44 h-44 rounded-full bg-coral text-night font-display font-semibold text-lg hover:bg-coral-deep transition-colors"
            >
              <span class="text-2xl">say hi</span>
              <span class="font-mono text-[11px] uppercase tracking-widest mt-1">→</span>
            </a>
          </div>
        </div>

        <!-- Channel rows -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-2 gap-3">
          @for (channel of channels; track channel.label) {
            <div class="group flex items-center justify-between gap-4 p-5 rounded-xl border border-edge bg-night-2/40 hover:border-coral/60 transition-colors">
              <a
                [href]="channel.href"
                [target]="channel.href.startsWith('http') ? '_blank' : null"
                [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
                class="flex-1 min-w-0"
              >
                <div class="font-mono text-[10px] uppercase tracking-widest text-fog group-hover:text-coral transition-colors">
                  {{ channel.label }}
                </div>
                <div class="font-display text-lg md:text-xl text-ivory truncate mt-1">
                  {{ channel.value }}
                </div>
              </a>
              @if (channel.copyable) {
                <button
                  type="button"
                  (click)="copy(channel)"
                  class="shrink-0 px-3 py-2 rounded-lg border border-edge hover:border-coral text-fog hover:text-coral text-xs font-mono uppercase tracking-widest transition-colors"
                  [attr.aria-label]="'Copy ' + channel.label"
                >
                  copy
                </button>
              } @else {
                <a
                  [href]="channel.href"
                  [target]="channel.href.startsWith('http') ? '_blank' : null"
                  [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
                  class="shrink-0 px-3 py-2 rounded-lg border border-edge hover:border-coral text-fog hover:text-coral text-xs font-mono uppercase tracking-widest transition-colors"
                >
                  open ↗
                </a>
              }
            </div>
          }
        </div>

        <!-- Dossier closer -->
        <div appReveal class="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-edge">
          <div>
            <div class="eyebrow">Prefer the full version?</div>
            <p class="mt-2 font-display text-2xl">Grab the PDF resume.</p>
          </div>
          <a
            appMagnetic
            href="/assets/Gopinath_P_Software_Developer.pdf"
            download="Gopinath_P_Software_Developer.pdf"
            class="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-night-3 border border-edge-hi hover:border-amber transition-colors"
          >
            <span class="font-mono text-[11px] uppercase tracking-widest text-amber">↓ pdf</span>
            <span class="font-display text-lg">Download resume</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly toast = inject(ToastService);

  readonly channels: Channel[] = [
    { label: 'Email', value: 'p.gopinath.work@gmail.com', href: 'mailto:p.gopinath.work@gmail.com', copyable: true },
    { label: 'Phone', value: '+91 63693 26257', href: 'tel:+916369326257', copyable: true },
    { label: 'LinkedIn', value: '/in/p-gopinath', href: 'https://www.linkedin.com/in/p-gopinath/', copyable: false },
    { label: 'GitHub', value: '@Gopi-p', href: 'https://github.com/Gopi-p', copyable: false },
    { label: 'Workshop', value: 'gopicraft.dev', href: 'https://gopicraft.dev', copyable: false },
    { label: 'Location', value: 'Chennai, India · IST', href: 'https://maps.google.com/?q=Chennai', copyable: false },
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
