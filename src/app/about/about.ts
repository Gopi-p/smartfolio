import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Stop {
  years: string;
  title: string;
  org: string;
  note?: string;
}

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="journey" class="relative py-20 md:py-28" aria-labelledby="journey-heading">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center">
          <div appReveal class="eyebrow">the journey</div>
          <h2
            id="journey-heading"
            appReveal
            class="mt-4 font-display font-extrabold text-4xl md:text-6xl"
          >
            Five years, three roles.
          </h2>
          <p appReveal class="mt-5 text-body text-lg leading-relaxed max-w-xl mx-auto">
            The work I enjoy most sits between the frontend and the system behind it. Here's the
            short version of how I got here.
          </p>
        </div>

        <div appReveal class="mt-14">
          @for (stop of stops; track stop.years + stop.title) {
            <div class="spec-row items-baseline">
              <div class="text-meta text-sm tabular-nums">{{ stop.years }}</div>
              <div>
                <span class="text-ink font-semibold">{{ stop.title }}</span>
                <span class="text-body"> · {{ stop.org }}</span>
                @if (stop.note) {
                  <div class="mt-1 text-sm text-meta leading-relaxed">{{ stop.note }}</div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly stops: Stop[] = [
    {
      years: '2025 → now',
      title: 'Software Engineer',
      org: 'Tango Eye, Chennai',
      note: 'Canvas based store layouts with Angular + Fabric.js, plus the planogram APIs and data model behind them.',
    },
    {
      years: '2023 → 2025',
      title: 'Team Lead',
      org: 'Tandemloop Technologies',
      note: 'Led seven engineers to rebuild a SaaS platform from scratch, driving the REST to GraphQL migration and multi-tenant architecture.',
    },
    {
      years: '2021 → 2023',
      title: 'Software Engineer',
      org: 'Tandemloop Technologies',
      note: 'Rewrote a legacy Angular app from v11 to v17. Built auth, organization management, RBAC, and order fulfilment.',
    },
    {
      years: '2024',
      title: 'MCA',
      org: 'University of Madras',
    },
    {
      years: '2021',
      title: 'B.Sc Physics & CS',
      org: 'SASTRA University',
    },
  ];
}
