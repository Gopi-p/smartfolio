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
    <section id="principles" class="relative py-20 md:py-28" aria-labelledby="principles-heading">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center">
          <div appReveal class="eyebrow">principles</div>
          <h2
            id="principles-heading"
            appReveal
            class="mt-4 font-display font-extrabold text-4xl md:text-6xl"
          >
            How it's built.
          </h2>
          <p appReveal class="mt-5 text-body text-lg leading-relaxed max-w-xl mx-auto">
            A few things I try to stick to, whether it's a big feature or a one-line fix. None of it
            is fancy. It mostly comes down to keeping the code easy to work with six months from
            now.
          </p>
        </div>

        <ul
          class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 text-center sm:text-left"
        >
          @for (principle of principles; track principle.title) {
            <li appReveal>
              <h3 class="font-display font-bold text-lg">{{ principle.title }}</h3>
              <p class="mt-2.5 text-[15px] text-body leading-relaxed">{{ principle.body }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class PhilosophyComponent {
  readonly principles: Principle[] = [
    {
      title: 'Model the data first',
      body: 'Most UI problems are really data problems. If I get the data model and state right first, the screen is usually the easy part.',
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
}
