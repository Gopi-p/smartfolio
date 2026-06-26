import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="masthead" class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Top metadata strip -->
        <div class="flex items-baseline justify-between border-b border-rule pb-4 mb-10">
          <span class="eyebrow">Vol. V · MMXXVI</span>
          <span class="eyebrow hidden sm:inline">A Software Engineer's Dossier</span>
          <span class="eyebrow">Chennai · IN</span>
        </div>

        <!-- Editorial cover grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <!-- Name & lead -->
          <div class="md:col-span-7 lg:col-span-8">
            <p class="eyebrow mb-6">No. 01 — Cover</p>

            <h1 class="font-display text-paper leading-[0.92] text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              <span class="block">Gopinath</span>
              <span class="block italic text-accent">P.</span>
            </h1>

            <p class="mt-10 max-w-xl text-paper-muted text-lg md:text-xl leading-relaxed">
              <span class="text-paper">Software engineer in practice.</span>
              Five years building scalable SaaS and performance-critical frontend
              systems with Angular &mdash; from canvas-based store layouts to multi-tenant
              platforms led with a team of seven.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="/assets/Gopinath_P_Software_Developer.pdf"
                download="Gopinath_P_Software_Developer.pdf"
                class="group inline-flex items-baseline gap-2 text-paper hover:text-accent transition-colors"
              >
                <span class="font-mono text-[10px] text-accent">↓</span>
                <span class="link-editorial font-mono text-xs uppercase tracking-widest">read the dossier · pdf</span>
              </a>
              <a
                href="#correspond"
                class="group inline-flex items-baseline gap-2 text-paper-muted hover:text-accent transition-colors"
              >
                <span class="font-mono text-[10px]">→</span>
                <span class="link-editorial font-mono text-xs uppercase tracking-widest">correspondence</span>
              </a>
            </div>
          </div>

          <!-- Portrait -->
          <div class="md:col-span-5 lg:col-span-4 md:pl-4">
            <figure class="portrait-frame">
              <img
                src="/assets/portrait.jpg"
                alt="Gopinath P, photographed at home"
                class="w-full aspect-[4/5] object-cover grayscale contrast-110 saturate-50"
                width="900"
                height="1125"
              />
              <figcaption class="mt-3 flex items-baseline justify-between text-paper-dim">
                <span class="font-mono text-[10px] uppercase tracking-widest">Plate i</span>
                <span class="font-display italic text-sm">The Engineer</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Lead-in stats -->
        <div class="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-rule pt-10">
          <div>
            <div class="font-display text-5xl md:text-6xl text-accent">05</div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-paper-dim">Years in practice</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl">07</div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-paper-dim">Engineers led</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl">11<span class="text-paper-dim">→</span>17</div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-paper-dim">Angular migration</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl">∞</div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-paper-dim">Retail layouts shipped</div>
          </div>
        </div>
      </div>

      <!-- Bottom marquee strip -->
      <div class="mt-20 md:mt-28 border-y border-rule overflow-hidden py-4">
        <div class="marquee-track flex gap-12 whitespace-nowrap">
          @for (i of [0, 1]; track i) {
            <div class="flex items-center gap-12 font-display italic text-3xl md:text-4xl text-paper">
              <span>Angular</span>
              <span class="text-accent">·</span>
              <span>Fabric.js</span>
              <span class="text-accent">·</span>
              <span>TypeScript</span>
              <span class="text-accent">·</span>
              <span>Signals</span>
              <span class="text-accent">·</span>
              <span>GraphQL</span>
              <span class="text-accent">·</span>
              <span>Node.js</span>
              <span class="text-accent">·</span>
              <span>MongoDB</span>
              <span class="text-accent">·</span>
              <span>Multi-tenant SaaS</span>
              <span class="text-accent">·</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
