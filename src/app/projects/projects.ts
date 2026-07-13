import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TiltDirective } from '../shared/tilt.directive';
import { RevealDirective } from '../shared/reveal.directive';

type Tag = 'all' | 'canvas' | 'leadership' | 'tooling' | 'infra';

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
  /** Route of a dedicated story page; the card becomes a link instead of expanding. */
  page?: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TiltDirective, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="relative py-24 md:py-32 bg-night-2/30" aria-labelledby="work-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-6">
            <span class="eyebrow">03 · Work</span>
            <h2
              id="work-heading"
              class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none"
            >
              Selected<br />
              <span class="text-coral italic">case studies.</span>
            </h2>
          </div>
          <div class="md:col-span-5 md:col-start-8 self-end">
            <p class="text-mist leading-relaxed">
              Open any card for the full write-up. Filter by what you're hiring for.
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
                    <div class="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Case {{ study.no }}
                    </div>
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
                  <div
                    class="mt-6 pt-6 border-t border-edge grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
                  >
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
                          <span
                            class="px-2.5 py-1 rounded-md bg-night-3 border border-edge font-mono text-[11px] text-mist"
                            >{{ tech }}</span
                          >
                        }
                      </div>
                    </div>
                  </div>
                }

                <!-- Toggle hint -->
                <div class="mt-auto pt-6 flex items-center justify-between text-fog">
                  <span class="font-mono text-[10px] uppercase tracking-widest">
                    {{ hintFor(study) }}
                  </span>
                  @if (study.page) {
                    <span class="font-mono text-base text-coral" aria-hidden="true">↗</span>
                  } @else {
                    <span
                      class="font-mono text-base text-coral transition-transform"
                      [class.rotate-45]="opened() === study.id"
                      >+</span
                    >
                  }
                </div>
              </div>

              @if (study.page) {
                <a
                  [routerLink]="study.page"
                  class="absolute inset-0 z-10 rounded-2xl"
                  [attr.aria-label]="'Read the full case study: ' + study.title"
                ></a>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  private readonly router = inject(Router);

  readonly active = signal<Tag>('all');
  readonly opened = signal<string | null>(null);

  readonly studies: CaseStudy[] = [
    {
      id: 'canvas',
      no: '01',
      title: 'From CAD files to a store map anyone can edit.',
      org: 'Tango Eye',
      years: '2025 to Now',
      lead: 'A retail chain ran 1000+ store layouts off CAD files, hard to update, track, or share. I built a drag-and-drop editor into the dashboard they already use daily.',
      highlights: [
        'Built the editor on Fabric.js: walls, entrances, and store-specific fixtures you drag to construct a layout',
        "Extracted each object's x/y coordinates, dimensions, angle, and colors, and stored the whole layout as JSON in MongoDB",
        'Re-rendered saved layouts on return, and kept them current as product placements change day to day',
        'Runs fully on the web inside the existing dashboard, and connects to the rest of the web and mobile app',
        'Powered near real-time analytics on top: footfall, pickup rate, and customer counts',
      ],
      stack: ['Angular', 'Fabric.js', 'TypeScript', 'MongoDB', 'Node.js'],
      category: 'canvas',
      emoji: '🗺️',
      page: '/work/canvas-editor',
    },
    {
      id: 'crm',
      no: '02',
      title: 'Rebuilding a four-app CRM suite from scratch.',
      org: 'Tandemloop',
      years: '2023 to 2025',
      lead: 'The legacy suite was slow, fragile, and full of security holes, with no room for new features. I led seven people to rebuild all four apps on a modern stack.',
      highlights: [
        'Led seven people across frontend, backend, QA, and UI/UX; gave each person a module to own and research',
        'Did the up-front R&D and set up the base before handing modules over to the team',
        'Upgraded Angular 11 to 17, and moved 200+ REST endpoints to GraphQL for querying flexibility',
        'Chose PrimeNG for streamlined theming, and Firebase JWT auth shared with a Flutter mobile app',
        "Set coding standards, reviewed the team's code, kept a proper test flow, and monitored deployments",
        'Shipped a more stable suite: smaller bundles, faster loads, fewer bugs, easier to scale',
      ],
      stack: ['Angular 11→17', 'GraphQL', 'PrimeNG', 'Firebase', 'Node.js', 'MongoDB'],
      category: 'leadership',
      emoji: '🧭',
      page: '/work/crm-suite',
    },
    {
      id: 'shipdesk',
      no: '03',
      title: 'A release tracker for a hand-off-heavy deploy flow.',
      org: 'Tango Eye',
      years: '2025 to Now',
      lead: 'Releases ran through several manual steps and three people over a Teams channel, where details slipped. ShipDesk records every release in one place.',
      highlights: [
        'Mapped the existing flow: devs publish module packages, a maintainer bumps the root package.json and cuts a tag, DevOps runs the CI/CD pipeline against it',
        'Chose not to automate the pipeline (still new, and not yet sure why the flow exists) and instead streamlined the communication around it',
        'Built a web tool that captures each release and its published versions in one place, so nothing gets lost in chat',
        'Keeps a record of every release for later reference',
        'Developed it with AI-assisted development',
      ],
      stack: ['Next.js', 'React', 'MongoDB', 'AI-assisted'],
      category: 'tooling',
      emoji: '🚀',
      page: '/work/shipdesk',
    },
    {
      id: 'home-cloud',
      no: '04',
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
      category: 'infra',
      emoji: '🏠',
      page: '/work/home-server',
    },
    {
      id: 'logdesk',
      no: '05',
      title: 'Full request logging without editing 100 APIs.',
      org: 'Tango Eye',
      years: '2025 to Now',
      lead: "A large app with 10+ devs had no logging, so nobody could tell who changed what or when. One middleware captured it all into OpenSearch, with a tool to read it back.",
      highlights: [
        'Found the shared service layer every module used for Mongo operations (find, aggregate, updateOne)',
        "Wrote one middleware and added it only to each module's routes, instead of editing hundreds of endpoints",
        'Captured the user, time, payload, headers, response, and which service helpers ran (so, which collections were touched)',
        "Wrote a meaningful JSON log per request into OpenSearch, under each module's own index",
        'Made it reusable: any module owner imports the middleware and points it at their own index',
        'Built LogDesk to read the logs back with pagination, sorting, filters, and search',
      ],
      stack: ['Node.js', 'Express', 'OpenSearch', 'Angular'],
      category: 'tooling',
      emoji: '🧾',
      page: '/work/logdesk',
    },
  ];

  readonly filters = [
    { id: 'all' as const, label: 'All', count: this.studies.length },
    {
      id: 'canvas' as const,
      label: 'Canvas',
      count: this.studies.filter((s) => s.category === 'canvas').length,
    },
    {
      id: 'leadership' as const,
      label: 'Leadership',
      count: this.studies.filter((s) => s.category === 'leadership').length,
    },
    {
      id: 'tooling' as const,
      label: 'Tooling',
      count: this.studies.filter((s) => s.category === 'tooling').length,
    },
    {
      id: 'infra' as const,
      label: 'Infra',
      count: this.studies.filter((s) => s.category === 'infra').length,
    },
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
    const study = this.studies.find((s) => s.id === id);
    // The tilted card content renders in front of the stretched link (preserve-3d),
    // so clicks land here: navigate cards that have a dedicated page.
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
