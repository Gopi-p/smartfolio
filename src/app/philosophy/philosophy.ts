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
      id="approach"
      class="relative py-24 md:py-32 bg-night-2/30"
      aria-labelledby="approach-heading"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div class="md:col-span-5">
            <span class="eyebrow">04 · Approach</span>
            <h2
              id="approach-heading"
              class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none"
            >
              How I <span class="text-coral italic">work.</span>
            </h2>
          </div>
          <div class="md:col-span-6 md:col-start-7 self-end">
            <p class="text-mist text-lg leading-relaxed">
              Nothing fancy, just a simple order I stick to on almost every build.
              Get the requirement and the data right first, stand up the whole
              flow early, and the rest tends to fall into place.
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
      title: 'Start from the requirement',
      body: "I read the whole requirement and the user story before writing anything, so I'm solving the real problem and not my guess of it.",
    },
    {
      title: 'Design the data flow first',
      body: 'Before any UI, I map how data moves through the system. Get that right and most of the screen falls out of it.',
    },
    {
      title: 'Stand up the skeleton early',
      body: 'I set up a base skeleton for the entire flow up front. It surfaces the gaps and the confusion early, instead of halfway through.',
    },
    {
      title: 'Reusable, scalable, secure',
      body: 'From there I lean on consistent patterns and a few coding standards of my own to keep things reusable, easy to scale, and safe by default.',
    },
  ];

  ordinal(index: number): string {
    const n = index + 1;
    return n < 10 ? '0' + n : '' + n;
  }
}
