import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MagneticDirective } from '../shared/magnetic.directive';
import { CounterDirective } from '../shared/counter.directive';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [MagneticDirective, CounterDirective, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="top" class="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-10">

        <!-- Status pill -->
        <div appReveal class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-edge-hi bg-night-2/60 mb-10">
          <span class="pulse-dot"></span>
          <span class="font-mono text-[11px] tracking-widest uppercase text-mist">
            Available · Open to new work
          </span>
        </div>

        <!-- Title grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <!-- Left column: text -->
          <div class="lg:col-span-7 order-2 lg:order-1">
            <h1 appReveal class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-bold">
              <span class="block text-mist">I build</span>
              <span class="block">
                <span class="text-coral">canvas-heavy</span>
              </span>
              <span class="block">frontends</span>
              <span class="block text-mist italic font-normal">and the systems</span>
              <span class="block text-mist italic font-normal">behind them.</span>
            </h1>

            <p appReveal class="mt-8 max-w-xl text-mist text-base md:text-lg leading-relaxed">
              I'm <span class="text-ivory">Gopinath</span>. Software engineer with
              <span class="text-ivory"> five years</span> in scalable SaaS and Angular.
              Currently at <span class="text-ivory">Tango Eye</span> building canvas
              based store layouts. Before that I led a team of seven rebuilding a
              multi tenant SaaS platform.
            </p>

            <div appReveal class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
              <a
                appMagnetic
                href="/assets/Gopinath_P_Software_Developer.pdf"
                download="Gopinath_P_Software_Developer.pdf"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-night font-medium text-sm hover:bg-coral-deep transition-colors"
              >
                <span>Download résumé</span>
                <span class="font-mono">↓</span>
              </a>
              <a
                appMagnetic
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-edge-hi text-ivory hover:border-coral hover:text-coral transition-colors text-sm"
              >
                <span>Get in touch</span>
                <span class="font-mono">→</span>
              </a>
              <span class="font-mono text-[11px] text-fog ml-2">
                or press <span class="kbd">⌘</span><span class="kbd">K</span>
              </span>
            </div>
          </div>

          <!-- Right column: polaroid -->
          <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div appReveal class="relative">
              <!-- Tape strip -->
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber/60 rotate-[2deg] z-10 shadow-md"></div>
              <figure class="polaroid w-[260px] sm:w-[300px] lg:w-[320px]">
                <img
                  src="/assets/portrait.jpg"
                  alt="Gopinath P"
                  width="320"
                  height="320"
                  loading="eager"
                />
                <figcaption class="absolute left-0 right-0 bottom-3 text-center text-night-2 font-hand text-2xl leading-none">
                  hi, gopinath here ✦
                </figcaption>
              </figure>
              <!-- Floating note -->
              <div class="hidden md:block absolute -left-12 bottom-4 bg-night-2 border border-edge-hi rounded-lg px-3 py-2 rotate-[-6deg] shadow-xl">
                <div class="font-mono text-[10px] text-fog uppercase tracking-widest">now</div>
                <div class="font-display text-sm text-coral">Tango Eye · Chennai</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stat counters -->
        <div appReveal class="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-edge pt-10">
          <div>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-coral" [appCounter]="5">0</span>
              <span class="font-display text-3xl text-fog">y</span>
            </div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">In practice</div>
          </div>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-amber" [appCounter]="7">0</span>
            </div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">Engineers led</div>
          </div>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-ivory" [appCounter]="4">0</span>
            </div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">Case studies</div>
          </div>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-ivory" [appCounter]="1000" suffix="+">0</span>
            </div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">Stores configured</div>
          </div>
        </div>
      </div>

      <!-- Tech marquee strip -->
      <div class="mt-20 md:mt-28 border-y border-edge overflow-hidden py-5 bg-night-2/40">
        <div class="marquee-track flex gap-10 whitespace-nowrap font-display text-2xl md:text-3xl">
          @for (i of [0, 1]; track i) {
            <div class="flex items-center gap-10">
              <span class="text-mist">Angular</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">Fabric.js</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">TypeScript</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">Signals</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">GraphQL</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">Node.js</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">MongoDB</span>
              <span class="text-coral">✦</span>
              <span class="text-mist">Multi-tenant SaaS</span>
              <span class="text-coral">✦</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
