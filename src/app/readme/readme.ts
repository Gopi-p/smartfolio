import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MagneticDirective } from '../shared/magnetic.directive';
import { CounterDirective } from '../shared/counter.directive';

@Component({
  selector: 'app-readme',
  imports: [RouterLink, MagneticDirective, CounterDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-3xl px-6 md:px-12 py-12 md:py-20">
      <div class="crumb">gopinath <span class="sep">~/</span> readme.md</div>

      <h1 class="mt-8 font-display font-bold text-4xl md:text-6xl leading-[1.04]">
        I build scalable frontends and the
        <span class="text-select glow">systems</span>
        behind them.
      </h1>

      <div class="mt-10 flex items-start gap-5">
        <img
          src="/assets/portrait.jpg"
          alt="Portrait of Gopinath P, software engineer"
          width="300"
          height="300"
          decoding="async"
          fetchpriority="high"
          loading="eager"
          class="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover object-top border border-line-hi shrink-0"
        />
        <p class="text-body text-base md:text-lg leading-relaxed">
          Hi, I'm <span class="text-ink font-medium">Gopinath</span>. I've spent about five years
          building SaaS products, mostly on the frontend with
          <span class="text-ink font-medium">Angular</span>. I like the harder parts: keeping a
          canvas fast when it's full of objects, getting the data model right so features stay
          simple, and upgrading big apps without freezing everything else.
        </p>
      </div>

      <p class="mt-5 text-body text-base md:text-lg leading-relaxed">
        Right now I'm at <span class="text-ink font-medium">Tango Eye</span> working on canvas based
        store layouts. Before that I led a team of seven that rebuilt a multi-tenant SaaS platform.
      </p>

      <!-- Quick stats, plain and honest -->
      <dl class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 border-y border-line py-6">
        <div class="flex flex-col-reverse gap-1">
          <dt class="eyebrow">years in</dt>
          <dd class="font-display text-3xl font-bold" [appCounter]="5">0</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="eyebrow">engineers led</dt>
          <dd class="font-display text-3xl font-bold" [appCounter]="7">0</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="eyebrow">stores daily</dt>
          <dd class="font-display text-3xl font-bold text-select" [appCounter]="1000" suffix="+">
            0
          </dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="eyebrow">systems shipped</dt>
          <dd class="font-display text-3xl font-bold" [appCounter]="6">0</dd>
        </div>
      </dl>

      <div class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
        <a
          appMagnetic
          routerLink="/work"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-select text-board font-medium text-sm hover:bg-select-deep transition-colors"
        >
          <span>Open the case files</span>
          <span class="font-mono" aria-hidden="true">→</span>
        </a>
        <a
          appMagnetic
          href="/assets/Gopinath_P_Software_Developer.pdf"
          download="Gopinath_P_Software_Developer.pdf"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line-hi text-ink hover:border-select hover:text-select transition-colors text-sm"
        >
          <span>Download résumé</span>
          <span class="font-mono" aria-hidden="true">↓</span>
        </a>
        <span class="font-mono text-[11px] text-meta ml-1">
          or press <span class="kbd">⌘</span><span class="kbd">K</span>
        </span>
      </div>

      <!-- Pointers into the tree -->
      <div class="mt-14 space-y-2.5 font-mono text-[13px]">
        <div class="eyebrow mb-4">where to look first</div>
        <a routerLink="/work" class="pointer-row group">
          <span class="text-select">work/</span>
          <span class="text-meta group-hover:text-body transition-colors">
            four case files, one with a full build story
          </span>
        </a>
        <a routerLink="/systems" class="pointer-row group">
          <span class="text-select">systems</span>
          <span class="text-meta group-hover:text-body transition-colors">
            what I've built and reused across products
          </span>
        </a>
        <a routerLink="/contact" class="pointer-row group">
          <span class="text-select">contact</span>
          <span class="text-meta group-hover:text-body transition-colors">
            quickest path is email, I read every message
          </span>
        </a>
      </div>
    </div>
  `,
  styles: `
    .pointer-row {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      padding: 0.55rem 0.75rem;
      border: 1px solid var(--color-line);
      border-radius: 8px;
      transition:
        border-color 150ms ease,
        background-color 150ms ease;
    }
    .pointer-row:hover {
      border-color: var(--color-line-hi);
      background: var(--color-panel);
    }
  `,
})
export class ReadmeComponent {}
