import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Channel {
  label: string;
  display: string;
  href: string;
  hint: string;
}

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="correspond" class="py-24 md:py-32 border-t border-rule">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div class="md:col-span-3">
            <span class="eyebrow">§ 04</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl leading-none">
              Correspond<br/>
              <span class="italic text-accent">ence</span>
            </h2>
          </div>
          <div class="md:col-span-7 md:col-start-5 self-end">
            <p class="font-display text-2xl md:text-3xl italic leading-snug text-paper">
              If you're hiring for the kind of problems above —
              <span class="text-accent not-italic">write to me directly.</span>
              I read every message.
            </p>
          </div>
        </div>

        <!-- Channels -->
        <div class="border-t border-rule">
          @for (channel of channels; track channel.label) {
            <a
              [href]="channel.href"
              [target]="channel.href.startsWith('http') ? '_blank' : null"
              [rel]="channel.href.startsWith('http') ? 'noopener noreferrer' : null"
              class="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-rule py-6 md:py-8 transition-colors hover:bg-ink-2"
            >
              <div class="md:w-1/4 lg:w-1/5">
                <span class="font-mono text-[10px] uppercase tracking-widest text-paper-dim group-hover:text-accent transition-colors">
                  {{ channel.label }}
                </span>
              </div>
              <div class="md:flex-1">
                <div class="font-display text-2xl md:text-3xl text-paper group-hover:text-accent transition-colors">
                  {{ channel.display }}
                </div>
              </div>
              <div class="md:w-1/4 md:text-right">
                <span class="font-mono text-[11px] text-paper-dim italic">{{ channel.hint }}</span>
              </div>
            </a>
          }
        </div>

        <!-- Dossier download as closing line -->
        <div class="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-6">
          <div class="max-w-xl">
            <span class="eyebrow">Coda</span>
            <p class="mt-3 font-display italic text-xl text-paper-muted">
              Or take the long-form version with you.
            </p>
          </div>
          <a
            href="/assets/Gopinath_P_Software_Developer.pdf"
            download="Gopinath_P_Software_Developer.pdf"
            class="group inline-flex items-baseline gap-3 text-paper hover:text-accent transition-colors border border-rule hover:border-accent px-6 py-4"
          >
            <span class="font-mono text-[10px] uppercase tracking-widest text-accent">↓ pdf</span>
            <span class="font-display italic text-xl">The full dossier</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly channels: Channel[] = [
    {
      label: 'Electronic mail',
      display: 'p.gopinath.work@gmail.com',
      href: 'mailto:p.gopinath.work@gmail.com',
      hint: 'First read of the morning',
    },
    {
      label: 'Telephone',
      display: '+91 63693 26257',
      href: 'tel:+916369326257',
      hint: 'IST · text first preferred',
    },
    {
      label: 'LinkedIn',
      display: '/in/p-gopinath',
      href: 'https://www.linkedin.com/in/p-gopinath/',
      hint: 'For the recruiters',
    },
    {
      label: 'GitHub',
      display: '@Gopi-p',
      href: 'https://github.com/Gopi-p',
      hint: 'For the engineers',
    },
    {
      label: 'Workshop',
      display: 'gopicraft.dev',
      href: 'https://gopicraft.dev',
      hint: 'Notebook & side projects',
    },
    {
      label: 'Residence',
      display: 'Chennai, India',
      href: 'https://maps.google.com/?q=Chennai',
      hint: 'IST (UTC+5:30)',
    },
  ];
}
