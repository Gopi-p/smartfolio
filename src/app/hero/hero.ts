import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MagneticDirective } from '../shared/magnetic.directive';
import { CounterDirective } from '../shared/counter.directive';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [MagneticDirective, CounterDirective, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="top" class="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Title grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start">
          <!-- Left column: text -->
          <div class="lg:col-span-7 order-2 lg:order-1">
            <h1
              appReveal
              class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[0.98] font-bold"
            >
              <span class="block text-mist">I build</span>
              <span class="block">
                <span class="relative inline-block">
                  <span class="text-coral">scalable</span>
                  <svg
                    class="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 text-coral/60"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9 Q 30 3 60 8 T 118 8 T 198 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </span>
              <span class="block">frontends</span>
              <span class="block text-mist italic font-normal">and the systems</span>
              <span class="block text-mist italic font-normal">
                behind them<span class="text-coral">.</span>
              </span>
            </h1>

            <div appReveal class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
              <a
                appMagnetic
                href="/assets/Gopinath_P_Software_Developer.pdf"
                download="Gopinath_P_Software_Developer.pdf"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-night font-medium text-sm hover:bg-coral-deep transition-colors"
              >
                <span>Download resume</span>
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
            </div>
          </div>

          <!-- Right column: polaroid -->
          <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div appReveal class="relative">
              <!-- Tape strip -->
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber/60 rotate-[2deg] z-10 shadow-md"
                aria-hidden="true"
              ></div>
              <figure class="polaroid w-[240px] sm:w-[280px] lg:w-[300px]">
                <img
                  src="/assets/portrait.jpg"
                  alt="Portrait of Gopinath P, software engineer"
                  width="300"
                  height="300"
                  decoding="async"
                  fetchpriority="high"
                  loading="eager"
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 240px"
                />
                <figcaption
                  class="absolute left-0 right-0 bottom-3 text-center text-night-2 font-hand text-2xl leading-none"
                >
                  hi, gopinath here ✦
                </figcaption>
              </figure>
              <!-- Floating note -->
              <div
                class="hidden md:block absolute -left-12 bottom-4 bg-night-2 border border-edge-hi rounded-lg px-3 py-2 rotate-[-6deg] shadow-xl"
              >
                <div class="font-mono text-[10px] text-fog uppercase tracking-widest">now</div>
                <div class="font-display text-sm text-coral">Tango Eye · Chennai</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stat counters -->
        <dl
          appReveal
          class="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-edge pt-10"
        >
          <div class="flex flex-col-reverse">
            <dt class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">
              Years of experience
            </dt>
            <dd class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-coral" [appCounter]="5"
                >0</span
              >
            </dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">
              Engineers led
            </dt>
            <dd class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-amber" [appCounter]="7"
                >0</span
              >
            </dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">
              Stores using my work daily
            </dt>
            <dd class="flex items-baseline gap-1">
              <span
                class="font-display text-5xl md:text-6xl font-bold text-ivory"
                [appCounter]="1000"
                suffix="+"
                >0</span
              >
            </dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="mt-2 font-mono text-[10px] uppercase tracking-widest text-fog">
              Core systems shipped
            </dt>
            <dd class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl font-bold text-ivory" [appCounter]="6"
                >0</span
              >
            </dd>
          </div>
        </dl>
      </div>

      <!-- Tech marquee strip -->
      <div
        class="mt-20 md:mt-28 border-y border-edge overflow-hidden py-5 bg-night-2/40"
        aria-hidden="true"
      >
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
