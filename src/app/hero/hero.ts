import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MagneticDirective } from '../shared/magnetic.directive';
import { CounterDirective } from '../shared/counter.directive';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrubDirective } from '../shared/scrub.directive';

@Component({
  selector: 'app-hero',
  imports: [MagneticDirective, CounterDirective, RevealDirective, ScrubDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="top" class="relative pt-32 md:pt-40 pb-20 md:pb-28 text-center overflow-hidden">
      <div class="max-w-4xl mx-auto px-6">
        <!-- Availability -->
        <div
          appReveal
          class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-line bg-panel/60 mb-8"
        >
          <span class="pulse-dot" aria-hidden="true"></span>
          <span class="text-xs font-medium text-body tracking-wide">
            Available · Open to new work
          </span>
        </div>

        <!-- The statement -->
        <h1
          class="font-display font-extrabold text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl"
        >
          I build scalable frontends
          <span class="grad block mt-1">and the systems behind them.</span>
        </h1>

        <p appReveal class="mt-8 max-w-2xl mx-auto text-body text-base md:text-lg leading-relaxed">
          Hi, I'm <span class="text-ink font-semibold">Gopinath</span>. I've spent about five years
          building SaaS products, mostly on the frontend with
          <span class="text-ink font-semibold">Angular</span>. Right now I'm at
          <span class="text-ink font-semibold">Tango Eye</span>, working on canvas based store
          layouts.
        </p>

        <div appReveal class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            appMagnetic
            href="#contact"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-ink text-board font-semibold text-sm hover:bg-select transition-colors"
          >
            Get in touch
          </a>
          <a
            appMagnetic
            href="/assets/Gopinath_P_Software_Developer.pdf"
            download="Gopinath_P_Software_Developer.pdf"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-line-hi text-ink text-sm hover:border-select hover:text-select transition-colors"
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>

        <!-- The product shot -->
        <div appReveal class="mt-16 md:mt-20 flex justify-center">
          <div class="halo">
            <img
              src="/assets/portrait.jpg"
              alt="Portrait of Gopinath P, software engineer"
              width="300"
              height="300"
              decoding="async"
              fetchpriority="high"
              loading="eager"
              class="w-44 h-44 md:w-56 md:h-56 rounded-[2rem] object-cover object-top border border-line-hi"
            />
          </div>
        </div>

        <!-- Numbers, plainly -->
        <dl appReveal class="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <div class="flex flex-col-reverse gap-1.5">
            <dt class="eyebrow">years in</dt>
            <dd class="font-display text-4xl md:text-5xl font-extrabold" [appCounter]="5">0</dd>
          </div>
          <div class="flex flex-col-reverse gap-1.5">
            <dt class="eyebrow">engineers led</dt>
            <dd class="font-display text-4xl md:text-5xl font-extrabold" [appCounter]="7">0</dd>
          </div>
          <div class="flex flex-col-reverse gap-1.5">
            <dt class="eyebrow">stores daily</dt>
            <dd
              class="font-display text-4xl md:text-5xl font-extrabold grad"
              [appCounter]="1000"
              suffix="+"
            >
              0
            </dd>
          </div>
          <div class="flex flex-col-reverse gap-1.5">
            <dt class="eyebrow">systems shipped</dt>
            <dd class="font-display text-4xl md:text-5xl font-extrabold" [appCounter]="6">0</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- The pitch: lines light up as you scroll through them -->
    <section class="py-24 md:py-36" aria-label="What I care about">
      <div class="max-w-3xl mx-auto px-6">
        <p class="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-snug space-y-2">
          <span appScrub class="block">I like the harder parts:</span>
          <span appScrub class="block">keeping a canvas fast when it's full of objects,</span>
          <span appScrub class="block">getting the data model right so features stay simple,</span>
          <span appScrub class="block"
            >and upgrading big apps without freezing everything else.</span
          >
        </p>
      </div>
    </section>
  `,
})
export class HeroComponent {}
