import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { MagneticDirective } from '../shared/magnetic.directive';

interface Feature {
  kicker: string;
  title: string;
  lead: string;
  points: string[];
  stat?: { value: string; label: string };
  story?: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, RevealDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="relative py-20 md:py-28" aria-labelledby="work-heading">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div appReveal class="eyebrow">the work</div>
        <h2
          id="work-heading"
          appReveal
          class="mt-4 font-display font-extrabold text-4xl md:text-6xl"
        >
          Four builds that mattered.
        </h2>
      </div>

      @for (feature of features; track feature.title) {
        <article class="max-w-3xl mx-auto px-6 pt-24 md:pt-32 text-center">
          <div appReveal class="eyebrow grad">{{ feature.kicker }}</div>
          <h3
            appReveal
            class="mt-4 font-display font-extrabold text-3xl md:text-5xl leading-[1.05]"
          >
            {{ feature.title }}
          </h3>
          <p appReveal class="mt-5 text-body text-lg md:text-xl leading-relaxed">
            {{ feature.lead }}
          </p>

          @if (feature.stat) {
            <div appReveal class="mt-10">
              <div class="font-display font-extrabold text-6xl md:text-8xl grad leading-none">
                {{ feature.stat.value }}
              </div>
              <div class="mt-3 eyebrow">{{ feature.stat.label }}</div>
            </div>
          }

          <ul appReveal class="mt-10 max-w-xl mx-auto text-left divide-y divide-line">
            @for (point of feature.points; track point) {
              <li class="py-3.5 text-[15px] text-body leading-relaxed flex gap-3">
                <span class="text-select shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>{{ point }}</span>
              </li>
            }
          </ul>

          @if (feature.story) {
            <div appReveal class="mt-10">
              <a
                appMagnetic
                [routerLink]="feature.story"
                class="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-line-hi text-ink text-sm font-medium hover:border-select hover:text-select transition-colors"
              >
                Read the full build story <span aria-hidden="true">→</span>
              </a>
            </div>
          }
        </article>
      }
    </section>
  `,
})
export class ProjectsComponent {
  readonly features: Feature[] = [
    {
      kicker: 'canvas',
      title: 'A canvas for shelving a thousand stores.',
      lead: 'Drag and drop, not a form, for retail planograms. Architected from scratch with Angular and Fabric.js, with the backend APIs and schema to match.',
      points: [
        'Drag and drop fixtures, zoom, pan, layout persistence',
        'OnPush, signals, standalone components, lazy loading',
        'Integrated near real-time compliance + placement data',
      ],
      stat: { value: '1000+', label: 'stores using it daily' },
    },
    {
      kicker: 'leadership',
      title: 'Rebuilding a SaaS, with a team of seven.',
      lead: 'Standards, reviews, and a shift from REST to GraphQL. Redesigned and rebuilt the platform from scratch on a multi-tenant base.',
      points: [
        'Led seven engineers across frontend, backend, and QA',
        'Defined coding standards, ran reviews, owned releases',
        'Coordinated design + QA + DevOps end to end',
      ],
      stat: { value: '7', label: 'engineers led' },
    },
    {
      kicker: 'migration',
      title: 'Angular 11 to 17, without stopping the ship.',
      lead: 'Modernize the app while it is still shipping. Small, reversible steps, no paused releases.',
      points: [
        'Migrated to standalone components and modern patterns',
        'Built auth, org management, RBAC, order fulfilment',
        'Cut bundle size, improved render performance',
      ],
      stat: { value: '11 → 17', label: 'six major versions, in flight' },
    },
    {
      kicker: 'home lab',
      title: 'A self hosted cloud, on a laptop with a tired battery.',
      lead: 'Family photos off the external drive, into something I can reach from anywhere. One old HP laptop, one bored weekend, and the only cost was a domain name.',
      points: [
        'Ubuntu Server, CasaOS, and Immich with mobile photo sync',
        'Cloudflare Tunnel for remote access without opening a single port',
        'Zero Trust email allowlist guarding the dashboard',
      ],
      story: '/work/home-server',
    },
  ];
}
