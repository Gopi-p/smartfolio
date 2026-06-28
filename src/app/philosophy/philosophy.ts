import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Principle {
  title: string;
  body: string;
}

@Component({
  selector: 'app-philosophy',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="philosophy"
      class="relative py-24 md:py-32 bg-night-2/30"
      aria-labelledby="philosophy-heading"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div class="md:col-span-5">
            <span class="eyebrow">04 · Philosophy</span>
            <h2
              id="philosophy-heading"
              class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none"
            >
              How I <span class="text-coral italic">build.</span>
            </h2>
          </div>
          <div class="md:col-span-6 md:col-start-7 self-end">
            <p class="text-mist text-lg leading-relaxed">
              A few things I try to stick to, whether it's a big feature or a
              one-line fix. None of it is fancy. It mostly comes down to keeping the
              code easy to work with six months from now.
            </p>
          </div>
        </div>

        <!-- Principles -->
        <ol class="grid grid-cols-1 md:grid-cols-2 gap-5">
          @for (principle of principles; track principle.title; let i = $index) {
            <li
              appReveal
              class="group p-6 rounded-2xl border border-edge bg-night/40 hover:border-coral/50 transition-colors"
            >
              <div class="flex items-baseline gap-3">
                <span class="font-mono text-[11px] text-coral">{{ ordinal(i) }}</span>
                <h3 class="font-display text-xl font-semibold group-hover:text-coral transition-colors">
                  {{ principle.title }}
                </h3>
              </div>
              <p class="mt-3 text-mist leading-relaxed">{{ principle.body }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class PhilosophyComponent {
  readonly principles: Principle[] = [
    {
      title: 'Model the data first',
      body: "Most UI problems are really data problems. If I get the data model and state right first, the screen is usually the easy part.",
    },
    {
      title: 'Maintainable over clever',
      body: "Code gets read a lot more than it gets written. I'd rather ship the obvious version than something clever I have to explain in review.",
    },
    {
      title: 'Keep it fast on purpose',
      body: 'I keep change detection cheap with OnPush and signals, and lazy-load what I can. When something feels slow, I measure it instead of guessing.',
    },
    {
      title: 'Plan for scale early',
      body: 'Clear tenant boundaries and predictable data flow early on save a lot of pain later, when both the load and the team get bigger.',
    },
    {
      title: "Migrate, don't rewrite",
      body: 'We took an app from Angular 11 to 17 without pausing releases. Small, reversible steps almost always beat a big rewrite.',
    },
    {
      title: "Don't skip the basics",
      body: "Reviews, tests, and accessibility aren't extra work. They're what lets the next change go in without breaking things.",
    },
  ];

  ordinal(index: number): string {
    const n = index + 1;
    return n < 10 ? '0' + n : '' + n;
  }
}
