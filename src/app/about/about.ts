import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface LogEntry {
  stamp: string;
  kind: 'role' | 'cert';
  title: string;
  org: string;
  points: string[];
  tags: string[];
}

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> log</div>
      <div class="mt-7 mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 class="font-display text-3xl md:text-5xl font-bold">The why behind the work.</h1>
        <p class="text-body text-sm md:text-base max-w-md">
          Five years in, mostly Angular and SaaS. The work I enjoy most sits between the frontend
          and the system behind it. Here's the short version of how I got here.
        </p>
      </div>

      <div class="space-y-4">
        @for (entry of entries; track entry.stamp + entry.title) {
          <article
            appReveal
            class="panel panel-hover grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-7"
          >
            <!-- Timestamp rail -->
            <div
              class="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1.5"
            >
              <div class="font-mono text-sm text-select tabular-nums">{{ entry.stamp }}</div>
              <div
                class="font-mono text-[10px] uppercase tracking-[0.16em]"
                [class.text-ok]="entry.kind === 'cert'"
                [class.text-meta]="entry.kind === 'role'"
              >
                [{{ entry.kind }}]
              </div>
            </div>

            <!-- Body -->
            <div class="md:col-span-9">
              <h3 class="font-display text-lg md:text-xl font-bold">
                {{ entry.title }} <span class="text-meta font-normal">· {{ entry.org }}</span>
              </h3>
              @if (entry.points.length) {
                <ul class="mt-3 space-y-1.5 max-w-3xl">
                  @for (point of entry.points; track point) {
                    <li class="text-sm text-body leading-relaxed flex gap-2.5">
                      <span class="font-mono text-select shrink-0" aria-hidden="true">></span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              }
              @if (entry.tags.length) {
                <div class="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  @for (tag of entry.tags; track tag) {
                    <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-meta">
                      · {{ tag }}
                    </span>
                  }
                </div>
              }
            </div>
          </article>
        }
      </div>
    </div>
  `,
})
export class AboutComponent {
  readonly entries: LogEntry[] = [
    {
      stamp: '2025 → now',
      kind: 'role',
      title: 'Software Engineer',
      org: 'Tango Eye, Chennai',
      points: [
        'Built a canvas based store layout system from scratch with Angular + Fabric.js',
        'Designed the planogram backend APIs, schema, and data model',
        'Tuned the frontend with OnPush, signals, standalone components, and lazy loading',
      ],
      tags: ['Angular', 'Fabric.js', 'Signals', 'Schema design'],
    },
    {
      stamp: '2023 → 2025',
      kind: 'role',
      title: 'Team Lead',
      org: 'Tandemloop Technologies',
      points: [
        'Led seven engineers to rebuild a SaaS platform from scratch',
        'Drove the REST to GraphQL migration and multi-tenant architecture',
        'Set coding standards, ran reviews, and owned releases with design, QA, and DevOps',
      ],
      tags: ['Leadership', 'REST to GraphQL', 'Multi-tenant'],
    },
    {
      stamp: '2024',
      kind: 'cert',
      title: 'MCA',
      org: 'University of Madras',
      points: [],
      tags: [],
    },
    {
      stamp: '2021 → 2023',
      kind: 'role',
      title: 'Software Engineer',
      org: 'Tandemloop Technologies',
      points: [
        'Rewrote a legacy Angular app from v11 to v17 with modern patterns',
        'Built auth, organization management, RBAC, and order fulfilment',
        'Cut bundle size and standardized data handling across modules',
      ],
      tags: ['Angular 11 to 17', 'RBAC', 'Bundle perf'],
    },
    {
      stamp: '2021',
      kind: 'cert',
      title: 'B.Sc Physics & CS',
      org: 'SASTRA University',
      points: [],
      tags: [],
    },
  ];
}
