import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Chapter {
  no: string;
  years: string;
  title: string;
  place: string;
  body: string;
  tags: string[];
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="notes" class="py-24 md:py-32 border-t border-rule">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div class="md:col-span-3">
            <span class="eyebrow">§ 01</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl leading-none">
              Field<br/>
              <span class="italic text-accent">notes</span>
            </h2>
          </div>

          <div class="md:col-span-7 md:col-start-5">
            <p class="font-display text-2xl md:text-3xl leading-snug text-paper">
              <span class="text-accent">I am Gopinath,</span> a software engineer who likes
              the parts of the job most people skip past — the schema
              under a feature, the rendering path that nobody profiled,
              the migration that should not be a rewrite.
            </p>
            <p class="mt-6 text-paper-muted leading-relaxed">
              Five years in, mostly in SaaS. I started in Angular,
              grew into backend design and team leadership, and now
              architect canvas-heavy frontend systems that have to
              behave well across thousands of retail locations. Strong
              opinions on signals, OnPush, and not adding a library
              when a function will do.
            </p>
          </div>
        </div>

        <!-- Career as chapters -->
        <div class="space-y-16 md:space-y-20">
          @for (chapter of chapters; track chapter.no) {
            <article class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group">
              <!-- Marginalia rail -->
              <aside class="md:col-span-3 flex flex-row md:flex-col gap-4 md:gap-2 items-baseline md:border-l md:border-rule md:pl-6 md:group-hover:border-accent transition-colors">
                <div class="font-mono text-[10px] tracking-widest uppercase text-paper-dim">Ch. {{ chapter.no }}</div>
                <div class="font-display italic text-2xl md:text-3xl text-paper">{{ chapter.years }}</div>
                <div class="font-mono text-[11px] text-paper-dim md:mt-1">{{ chapter.place }}</div>
              </aside>

              <div class="md:col-span-9">
                <h3 class="font-display text-3xl md:text-4xl leading-tight text-paper">
                  {{ chapter.title }}
                </h3>
                <p class="mt-4 text-paper-muted leading-relaxed max-w-3xl">
                  {{ chapter.body }}
                </p>
                <div class="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  @for (tag of chapter.tags; track tag) {
                    <span class="font-mono text-[11px] uppercase tracking-widest text-paper-dim">
                      <span class="text-accent">·</span> {{ tag }}
                    </span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Education footer -->
        <div class="mt-24 pt-10 border-t border-rule grid grid-cols-1 md:grid-cols-12 gap-6">
          <div class="md:col-span-3">
            <span class="eyebrow">Education</span>
          </div>
          <div class="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div class="font-display text-xl text-paper">MCA</div>
              <div class="text-sm text-paper-muted mt-1">University of Madras</div>
              <div class="font-mono text-[11px] text-paper-dim mt-1">2024</div>
            </div>
            <div>
              <div class="font-display text-xl text-paper">B.Sc Physics & Computer Science</div>
              <div class="text-sm text-paper-muted mt-1">SASTRA University</div>
              <div class="font-mono text-[11px] text-paper-dim mt-1">2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly chapters: Chapter[] = [
    {
      no: 'III',
      years: '2025 — now',
      title: 'Architecting a canvas at retail scale.',
      place: 'Tango Eye, Chennai',
      body: `Architected a canvas-based store layout system from scratch with Angular and Fabric.js, enabling drag-and-drop configuration of fixtures and product placements across thousands of retail locations. Designed planogram backend APIs and schema, and improved frontend performance with OnPush, signals, standalone components, lazy loading, and modular architecture. Integrated near real-time data to visualize product compliance, placement, and operational insights.`,
      tags: ['Angular', 'Fabric.js', 'Signals', 'Node.js', 'Schema design'],
    },
    {
      no: 'II',
      years: '2023 — 2025',
      title: 'Team lead, rebuilding a SaaS platform from scratch.',
      place: 'Tandemloop Technologies',
      body: `Led seven engineers across frontend, backend, and QA to redesign and rebuild a multi-tenant SaaS platform. Drove the REST-to-GraphQL migration, defined coding standards, ran code reviews, and managed sprint planning and feature releases end-to-end with design, QA, and DevOps.`,
      tags: ['Leadership', 'REST → GraphQL', 'Multi-tenant', 'Standards'],
    },
    {
      no: 'I',
      years: '2021 — 2023',
      title: 'Cutting teeth on the Angular 11 to 17 rewrite.',
      place: 'Tandemloop Technologies',
      body: `Revamped a legacy Angular application by rewriting it from Angular 11 to 17 with modern architecture patterns and standalone components. Built core modules — authentication, organization management, role-based access control, and order fulfilment — and standardized data handling patterns to support rapid feature work across the suite.`,
      tags: ['Angular 11 → 17', 'RBAC', 'Auth', 'Bundle optimization'],
    },
  ];
}
