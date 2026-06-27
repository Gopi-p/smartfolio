import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Chapter {
  years: string;
  role: string;
  org: string;
  body: string;
  tags: string[];
  accent: 'coral' | 'amber' | 'ivory';
}

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="relative py-24 md:py-32">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div class="md:col-span-4">
            <span class="eyebrow">01 · About</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none">
              The <span class="text-coral">why</span><br/>
              behind the work.
            </h2>
          </div>
          <div class="md:col-span-7 md:col-start-6 self-end">
            <p class="text-mist text-lg leading-relaxed">
              Five years of SaaS work, mostly Angular. I like the parts
              everyone else skips: schemas, render paths, and migrations
              that don't have to be rewrites. Below is the short version
              of how I got here.
            </p>
          </div>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-edge"></div>

          <div class="space-y-12 md:space-y-16">
            @for (chapter of chapters; track chapter.years; let i = $index) {
              <article
                appReveal
                class="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start"
              >
                <!-- Node dot -->
                <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full ring-4 ring-night z-10"
                     [class.bg-coral]="chapter.accent === 'coral'"
                     [class.bg-amber]="chapter.accent === 'amber'"
                     [class.bg-ivory]="chapter.accent === 'ivory'"></div>

                <!-- Card position alternating -->
                @if (i % 2 === 0) {
                  <div class="pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div class="font-mono text-xs uppercase tracking-widest text-fog">{{ chapter.years }}</div>
                    <h3 class="mt-2 font-display text-2xl md:text-3xl font-bold">
                      {{ chapter.role }}
                    </h3>
                    <div class="mt-1 font-mono text-xs text-coral">{{ chapter.org }}</div>
                    <p class="mt-4 text-mist leading-relaxed">{{ chapter.body }}</p>
                    <div class="mt-4 flex flex-wrap gap-2 md:justify-end">
                      @for (tag of chapter.tags; track tag) {
                        <span class="font-mono text-[10px] uppercase tracking-widest text-fog">· {{ tag }}</span>
                      }
                    </div>
                  </div>
                  <div class="hidden md:block"></div>
                } @else {
                  <div class="hidden md:block"></div>
                  <div class="pl-12 md:pl-12">
                    <div class="font-mono text-xs uppercase tracking-widest text-fog">{{ chapter.years }}</div>
                    <h3 class="mt-2 font-display text-2xl md:text-3xl font-bold">
                      {{ chapter.role }}
                    </h3>
                    <div class="mt-1 font-mono text-xs text-coral">{{ chapter.org }}</div>
                    <p class="mt-4 text-mist leading-relaxed">{{ chapter.body }}</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      @for (tag of chapter.tags; track tag) {
                        <span class="font-mono text-[10px] uppercase tracking-widest text-fog">· {{ tag }}</span>
                      }
                    </div>
                  </div>
                }
              </article>
            }
          </div>
        </div>

        <!-- Education row -->
        <div appReveal class="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-edge">
          <div class="md:col-span-4">
            <div class="eyebrow">Education</div>
          </div>
          <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl bg-night-2/60 border border-edge hover:border-amber transition-colors">
              <div class="font-display text-xl font-semibold">MCA</div>
              <div class="text-sm text-mist mt-1">University of Madras</div>
              <div class="font-mono text-[11px] text-fog mt-2">2024</div>
            </div>
            <div class="p-5 rounded-xl bg-night-2/60 border border-edge hover:border-amber transition-colors">
              <div class="font-display text-xl font-semibold">B.Sc Physics & CS</div>
              <div class="text-sm text-mist mt-1">SASTRA University</div>
              <div class="font-mono text-[11px] text-fog mt-2">2021</div>
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
      years: '2025 to Now',
      role: 'Software Engineer',
      org: 'Tango Eye · Chennai',
      body: 'Built a canvas based store layout system with Angular and Fabric.js. Drag and drop fixtures and product placements across thousands of stores. Designed the planogram backend APIs and schema. Tuned the frontend with OnPush, signals, standalone components, and lazy loading.',
      tags: ['Angular', 'Fabric.js', 'Signals', 'Schema design'],
      accent: 'coral',
    },
    {
      years: '2023 to 2025',
      role: 'Team Lead',
      org: 'Tandemloop Technologies',
      body: 'Led seven engineers to rebuild a multi tenant SaaS platform. Drove the REST to GraphQL migration. Set coding standards, ran code reviews, and shipped releases with design, QA, and DevOps.',
      tags: ['Leadership', 'REST to GraphQL', 'Multi-tenant'],
      accent: 'amber',
    },
    {
      years: '2021 to 2023',
      role: 'Software Engineer',
      org: 'Tandemloop Technologies',
      body: 'Rewrote a legacy Angular app from version 11 to 17. Standalone components, modern patterns. Built auth, organization management, RBAC, and order fulfilment. Cut bundle size and standardized data handling along the way.',
      tags: ['Angular 11 to 17', 'RBAC', 'Bundle perf'],
      accent: 'ivory',
    },
  ];
}
