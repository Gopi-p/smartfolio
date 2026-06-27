import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TiltDirective } from '../shared/tilt.directive';
import { RevealDirective } from '../shared/reveal.directive';

type Tag = 'all' | 'canvas' | 'leadership' | 'modernization';

interface CaseStudy {
  id: string;
  no: string;
  title: string;
  org: string;
  years: string;
  lead: string;
  highlights: string[];
  stack: string[];
  category: Exclude<Tag, 'all'>;
  emoji: string;
}

@Component({
  selector: 'app-projects',
  imports: [TiltDirective, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="relative py-24 md:py-32 bg-night-2/30">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-6">
            <span class="eyebrow">02 · Work</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none">
              Selected<br/>
              <span class="text-coral italic">case studies.</span>
            </h2>
          </div>
          <div class="md:col-span-5 md:col-start-8 self-end">
            <p class="text-mist leading-relaxed">
              Click a card for details. Filter by what you're hiring for.
            </p>
          </div>
        </div>

        <!-- Filter chips -->
        <div appReveal class="mb-10 flex flex-wrap items-center gap-2">
          @for (filter of filters; track filter.id) {
            <button
              type="button"
              (click)="setFilter(filter.id)"
              class="chip"
              [class.is-active]="active() === filter.id"
            >
              {{ filter.label }}
              <span class="ml-2 text-[10px] opacity-70">{{ filter.count }}</span>
            </button>
          }
        </div>

        <!-- Cases grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          @for (study of visible(); track study.id) {
            <article
              appReveal
              appTilt
              (click)="toggle(study.id)"
              class="relative bg-night-2 border border-edge rounded-2xl p-6 md:p-7 cursor-pointer hover:border-coral/60 transition-colors flex flex-col"
              [class.lg:col-span-3]="opened() === study.id"
            >
              <div class="tilt-card-inner flex flex-col h-full">
                <!-- Top row -->
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-mono text-[10px] uppercase tracking-widest text-fog">Case {{ study.no }}</div>
                    <div class="font-mono text-[11px] text-coral mt-1">{{ study.org }}</div>
                  </div>
                  <div class="text-3xl">{{ study.emoji }}</div>
                </div>

                <h3 class="mt-6 font-display text-2xl font-bold leading-tight">
                  {{ study.title }}
                </h3>
                <p class="mt-3 text-sm text-mist italic">{{ study.lead }}</p>

                <div class="mt-6 font-mono text-[11px] text-fog">{{ study.years }}</div>

                <!-- Expanded details -->
                @if (opened() === study.id) {
                  <div class="mt-6 pt-6 border-t border-edge grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div class="eyebrow mb-3">What I did</div>
                      <ul class="space-y-2">
                        @for (item of study.highlights; track item) {
                          <li class="text-mist leading-relaxed">
                            <span class="text-coral mr-2">▸</span>{{ item }}
                          </li>
                        }
                      </ul>
                    </div>
                    <div>
                      <div class="eyebrow mb-3">Stack</div>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of study.stack; track tech) {
                          <span class="px-2.5 py-1 rounded-md bg-night-3 border border-edge font-mono text-[11px] text-mist">{{ tech }}</span>
                        }
                      </div>
                    </div>
                  </div>
                }

                <!-- Toggle hint -->
                <div class="mt-auto pt-6 flex items-center justify-between text-fog">
                  <span class="font-mono text-[10px] uppercase tracking-widest">
                    {{ opened() === study.id ? 'click to collapse' : 'click to read' }}
                  </span>
                  <span class="font-mono text-base text-coral transition-transform"
                        [class.rotate-45]="opened() === study.id">+</span>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly active = signal<Tag>('all');
  readonly opened = signal<string | null>(null);

  readonly studies: CaseStudy[] = [
    {
      id: 'planogram',
      no: '01',
      title: 'A canvas for shelving a thousand stores.',
      org: 'Tango Eye',
      years: '2025 to Now',
      lead: 'Drag and drop, not a form, for retail planograms.',
      highlights: [
        'Architected a canvas system from scratch with Angular + Fabric.js',
        'Drag-and-drop fixtures, zoom, pan, layout persistence',
        'Backend APIs + schema design for planogram management',
        'OnPush, signals, standalone components, lazy loading',
        'Integrated near real-time compliance + placement data',
      ],
      stack: ['Angular', 'Fabric.js', 'TypeScript', 'Signals', 'Node.js', 'MongoDB'],
      category: 'canvas',
      emoji: '🗺️',
    },
    {
      id: 'zone',
      no: '02',
      title: 'Rebuilding a SaaS, with a team of seven.',
      org: 'Tandemloop · Zone Platform',
      years: '2023 to 2025',
      lead: 'Standards, reviews, and a shift from REST to GraphQL.',
      highlights: [
        'Led seven engineers across frontend, backend, and QA',
        'Redesigned and rebuilt the platform from scratch',
        'Drove REST → GraphQL migration on a multi-tenant base',
        'Defined coding standards, ran reviews, owned releases',
        'Coordinated design + QA + DevOps end to end',
      ],
      stack: ['Angular', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB', 'Multi-tenant'],
      category: 'leadership',
      emoji: '🧭',
    },
    {
      id: 'ng-modernize',
      no: '03',
      title: 'Angular 11 → 17, without stopping the ship.',
      org: 'Tandemloop · Zone Platform',
      years: '2021 to 2023',
      lead: 'Modernize the app while it is still shipping.',
      highlights: [
        'Rewrote legacy app from Angular 11 to 17',
        'Migrated to standalone components and modern patterns',
        'Built auth, org management, RBAC, order fulfilment',
        'Reusable component library + standardized data flow',
        'Cut bundle size, improved render performance',
      ],
      stack: ['Angular 11→17', 'TypeScript', 'RxJS', 'Standalone', 'RBAC'],
      category: 'modernization',
      emoji: '🛠',
    },
  ];

  readonly filters = [
    { id: 'all' as const, label: 'All', count: this.studies.length },
    { id: 'canvas' as const, label: 'Canvas', count: this.studies.filter((s) => s.category === 'canvas').length },
    { id: 'leadership' as const, label: 'Leadership', count: this.studies.filter((s) => s.category === 'leadership').length },
    { id: 'modernization' as const, label: 'Modernization', count: this.studies.filter((s) => s.category === 'modernization').length },
  ];

  readonly visible = computed(() => {
    const filter = this.active();
    if (filter === 'all') return this.studies;
    return this.studies.filter((s) => s.category === filter);
  });

  setFilter(tag: Tag) {
    this.active.set(tag);
    this.opened.set(null);
  }

  toggle(id: string) {
    this.opened.update((curr) => (curr === id ? null : id));
  }
}
