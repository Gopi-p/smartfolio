import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

interface CaseStudy {
  id: string;
  no: string;
  title: string;
  org: string;
  years: string;
  lead: string;
  highlights: string[];
  stack: string[];
  /** Route of a dedicated story page; the card becomes a link instead of expanding. */
  page?: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> work</div>
      <div class="mt-7 mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 class="font-display text-3xl md:text-5xl font-bold">Case files.</h1>
        <p class="text-body text-sm md:text-base max-w-md">
          Click a file for details. The home server story has its own page.
        </p>
      </div>

      <div class="space-y-4">
        @for (study of studies; track study.id) {
          <article
            appReveal
            (click)="toggle(study.id)"
            (keydown.enter)="toggle(study.id)"
            [attr.tabindex]="study.page ? null : 0"
            [attr.role]="study.page ? null : 'button'"
            [attr.aria-expanded]="study.page ? null : opened() === study.id"
            class="panel panel-hover relative cursor-pointer p-6 md:p-8"
          >
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <!-- File index -->
              <div class="md:col-span-2 flex md:block items-baseline gap-3">
                <div class="font-display text-3xl md:text-5xl font-bold text-line-hi">
                  {{ study.no }}
                </div>
                <div
                  class="mt-0 md:mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-meta"
                >
                  {{ study.years }}
                </div>
              </div>

              <!-- Body -->
              <div class="md:col-span-8">
                <h3 class="font-display text-xl md:text-2xl font-bold leading-snug">
                  {{ study.title }}
                </h3>
                <p class="mt-2 text-sm md:text-[15px] text-body italic">{{ study.lead }}</p>

                @if (opened() === study.id) {
                  <div
                    class="mt-6 pt-6 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
                  >
                    <div>
                      <div class="eyebrow mb-3">what I did</div>
                      <ul class="space-y-2">
                        @for (item of study.highlights; track item) {
                          <li class="text-body leading-relaxed flex gap-2.5">
                            <span class="text-select mt-px shrink-0" aria-hidden="true">▸</span>
                            <span>{{ item }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                    <div>
                      <div class="eyebrow mb-3">stack</div>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of study.stack; track tech) {
                          <span
                            class="px-2.5 py-1 rounded-md bg-panel-2 border border-line font-mono text-[11px] text-body"
                          >
                            {{ tech }}
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>

              <!-- Meta -->
              <div
                class="md:col-span-2 flex md:flex-col items-center md:items-end justify-between gap-2"
              >
                <div
                  class="font-mono text-[10px] uppercase tracking-[0.12em] text-meta md:text-right"
                >
                  {{ study.org }}
                </div>
                @if (study.page) {
                  <span class="font-mono text-lg text-select" aria-hidden="true">↗</span>
                } @else {
                  <span
                    class="font-mono text-lg text-select transition-transform"
                    [class.rotate-45]="opened() === study.id"
                    aria-hidden="true"
                  >
                    +
                  </span>
                }
              </div>
            </div>

            <div class="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-meta">
              {{ hintFor(study) }}
            </div>

            @if (study.page) {
              <a
                [routerLink]="study.page"
                class="absolute inset-0 z-10 rounded-[10px]"
                [attr.aria-label]="'Read the full case study: ' + study.title"
              ></a>
            }
          </article>
        }
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  private readonly router = inject(Router);

  readonly opened = signal<string | null>(null);

  readonly studies: CaseStudy[] = [
    {
      id: 'planogram',
      no: '001',
      title: 'A canvas for shelving a thousand stores.',
      org: 'Tango Eye',
      years: '2025 to Now',
      lead: 'Drag and drop, not a form, for retail planograms.',
      highlights: [
        'Architected a canvas system from scratch with Angular + Fabric.js',
        'Drag and drop fixtures, zoom, pan, layout persistence',
        'Backend APIs + schema design for planogram management',
        'OnPush, signals, standalone components, lazy loading',
        'Integrated near real-time compliance + placement data',
      ],
      stack: ['Angular', 'Fabric.js', 'TypeScript', 'Signals', 'Node.js', 'MongoDB'],
    },
    {
      id: 'zone',
      no: '002',
      title: 'Rebuilding a SaaS, with a team of seven.',
      org: 'Tandemloop · Zone',
      years: '2023 to 2025',
      lead: 'Standards, reviews, and a shift from REST to GraphQL.',
      highlights: [
        'Led seven engineers across frontend, backend, and QA',
        'Redesigned and rebuilt the platform from scratch',
        'Drove the REST to GraphQL migration on a multi-tenant base',
        'Defined coding standards, ran reviews, owned releases',
        'Coordinated design + QA + DevOps end to end',
      ],
      stack: ['Angular', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB', 'Multi-tenant'],
    },
    {
      id: 'ng-modernize',
      no: '003',
      title: 'Angular 11 to 17, without stopping the ship.',
      org: 'Tandemloop · Zone',
      years: '2021 to 2023',
      lead: 'Modernize the app while it is still shipping.',
      highlights: [
        'Rewrote legacy app from Angular 11 to 17',
        'Migrated to standalone components and modern patterns',
        'Built auth, org management, RBAC, order fulfilment',
        'Reusable component library + standardized data flow',
        'Cut bundle size, improved render performance',
      ],
      stack: ['Angular 11 to 17', 'TypeScript', 'RxJS', 'Standalone', 'RBAC'],
    },
    {
      id: 'home-cloud',
      no: '004',
      title: 'A self hosted cloud, on a laptop with a tired battery.',
      org: 'Personal · Home Lab',
      years: '2025 to Now',
      lead: 'Family photos off the external drive, into something I can reach from anywhere.',
      highlights: [
        'Repurposed an old laptop (dead battery, decent CPU and storage) as a 24/7 home server',
        'Ubuntu Server with static IP and systemd services that survive crashes and reboots',
        'CasaOS for GUI management, Immich for photo and video backup with mobile sync',
        'Cloudflare Tunnel for remote access without exposing IP or opening router ports',
        'Cloudflare Zero Trust to allowlist specific email addresses for access and shared albums',
      ],
      stack: ['Ubuntu Server', 'CasaOS', 'Immich', 'Cloudflare Tunnel', 'Zero Trust', 'systemd'],
      page: '/work/home-server',
    },
  ];

  toggle(id: string) {
    const study = this.studies.find((s) => s.id === id);
    // Cards with a dedicated page navigate instead of expanding.
    if (study?.page) {
      this.router.navigateByUrl(study.page);
      return;
    }
    this.opened.update((curr) => (curr === id ? null : id));
  }

  hintFor(study: CaseStudy): string {
    if (study.page) return 'read the full story';
    return this.opened() === study.id ? 'click to collapse' : 'click to read';
  }
}
