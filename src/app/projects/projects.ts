import { ChangeDetectionStrategy, Component } from '@angular/core';

interface CaseStudy {
  no: string;
  title: string;
  client: string;
  year: string;
  lead: string;
  body: string[];
  stack: string[];
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="py-24 md:py-32 border-t border-rule">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div class="md:col-span-3">
            <span class="eyebrow">§ 02</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl leading-none">
              Selected<br/>
              <span class="italic text-accent">work</span>
            </h2>
          </div>
          <div class="md:col-span-7 md:col-start-5 self-end">
            <p class="text-paper-muted leading-relaxed max-w-2xl">
              Three case files, drawn from current and previous practice.
              I write each one as the kind of summary I'd want to find if
              I were the next engineer to touch it.
            </p>
          </div>
        </div>

        <!-- Cases -->
        <div class="space-y-24 md:space-y-32">
          @for (study of cases; track study.no; let last = $last) {
            <article class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <!-- Case number column -->
              <header class="md:col-span-3 md:sticky md:top-24 md:self-start">
                <div class="font-display text-7xl md:text-8xl leading-none text-accent">
                  {{ study.no }}
                </div>
                <div class="mt-4 font-mono text-[10px] uppercase tracking-widest text-paper-dim">
                  Case file
                </div>
                <dl class="mt-8 space-y-3 text-sm">
                  <div class="flex justify-between gap-4 border-b border-rule pb-2">
                    <dt class="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Client</dt>
                    <dd class="text-paper text-right">{{ study.client }}</dd>
                  </div>
                  <div class="flex justify-between gap-4 border-b border-rule pb-2">
                    <dt class="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Year</dt>
                    <dd class="text-paper text-right font-mono text-xs">{{ study.year }}</dd>
                  </div>
                </dl>
              </header>

              <!-- Case body -->
              <div class="md:col-span-9">
                <h3 class="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  {{ study.title }}
                </h3>
                <p class="mt-6 font-display italic text-xl md:text-2xl text-paper-muted leading-snug max-w-3xl">
                  {{ study.lead }}
                </p>

                <div class="mt-10 space-y-5 text-paper-muted leading-relaxed max-w-3xl">
                  @for (para of study.body; track para) {
                    <p>{{ para }}</p>
                  }
                </div>

                <!-- Stack inline -->
                <div class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 max-w-3xl">
                  <span class="font-mono text-[10px] uppercase tracking-widest text-accent">Stack</span>
                  @for (tech of study.stack; track tech; let lastTech = $last) {
                    <span class="font-mono text-xs text-paper">{{ tech }}</span>
                    @if (!lastTech) {
                      <span class="font-mono text-xs text-paper-dim">·</span>
                    }
                  }
                </div>
              </div>
            </article>

            @if (!last) {
              <hr class="border-rule"/>
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly cases: CaseStudy[] = [
    {
      no: '01',
      title: 'A canvas for shelving thousands of stores.',
      client: 'Tango Eye',
      year: '2025 — present',
      lead: 'Designing planograms as direct manipulation, not as a form.',
      body: [
        `Architected a canvas-based store layout system from scratch using Angular and Fabric.js. Drag-and-drop configuration of fixtures and product placements, with zoom, pan, dynamic positioning, layout persistence, and state synchronization for large-scale configurations across thousands of retail locations.`,
        `Designed the backend APIs for planogram management — data modeling, schema design, and integration with existing services — then integrated near real-time store data from external systems to visualize product compliance, placement status, and operational insights.`,
        `Re-tuned the frontend with OnPush change detection, signals, standalone components, lazy loading, and a modular architecture, reducing bundle size and improving rendering efficiency as the canvas scaled.`,
      ],
      stack: ['Angular', 'Fabric.js', 'TypeScript', 'Signals', 'Node.js', 'MongoDB'],
    },
    {
      no: '02',
      title: 'Rebuilding a multi-tenant SaaS, with a team of seven.',
      client: 'Tandemloop · Zone Platform',
      year: '2023 — 2025',
      lead: 'Less a project than a posture: standards, reviews, and a slow shift from REST to GraphQL.',
      body: [
        `Led seven engineers across frontend, backend, and QA to redesign and rebuild the platform from scratch. Drove architectural decisions on both sides of the wire — including the migration from REST to GraphQL and the move to multi-tenant architecture — to enable scalability and faster feature delivery.`,
        `Established coding standards, project structure, and development workflows. Ran regular code reviews, and managed end-to-end delivery by coordinating with design, QA, and DevOps. Handled sprint planning, task allocation, and feature releases.`,
        `The suite covers CRM (lead-to-customer lifecycle), order fulfilment, accounting, and communication tools used by small and medium businesses.`,
      ],
      stack: ['Angular', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB', 'Multi-tenant'],
    },
    {
      no: '03',
      title: 'Angular 11 → 17, without throwing the platform away.',
      client: 'Tandemloop · Zone Platform',
      year: '2021 — 2023',
      lead: 'A modernization, not a museum piece — keep shipping while you replace the floor.',
      body: [
        `Rewrote a legacy Angular application from version 11 to 17 using modern architecture patterns and standalone components. Built core modules including authentication, organization management, role-based access control, and order fulfilment workflows.`,
        `Improved performance and scalability by restructuring the frontend architecture, optimizing data flow, and reducing bundle size. Built a reusable UI component library and standardized data-handling patterns to support rapid feature work across multiple SaaS modules.`,
      ],
      stack: ['Angular 11 → 17', 'TypeScript', 'RxJS', 'Standalone', 'RBAC'],
    },
  ];
}
