import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Rule {
  code: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-philosophy',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> runbook</div>
      <div class="mt-7 mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 class="font-display text-3xl md:text-5xl font-bold">The runbook.</h1>
        <p class="text-body text-sm md:text-base max-w-md">
          A few things I try to stick to, whether it's a big feature or a one-line fix. None of it
          is fancy. It mostly comes down to keeping the code easy to work with six months from now.
        </p>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        @for (rule of rules; track rule.code) {
          <li appReveal class="panel panel-hover p-6">
            <div class="flex items-baseline gap-3">
              <span class="font-mono text-[11px] text-select">{{ rule.code }}</span>
              <h3 class="font-display text-lg font-bold">{{ rule.title }}</h3>
            </div>
            <p class="mt-2.5 text-sm md:text-[15px] text-body leading-relaxed">
              {{ rule.body }}
            </p>
          </li>
        }
      </ul>
    </div>
  `,
})
export class PhilosophyComponent {
  readonly rules: Rule[] = [
    {
      code: 'RULE-01',
      title: 'Model the data first',
      body: 'Most UI problems are really data problems. If I get the data model and state right first, the screen is usually the easy part.',
    },
    {
      code: 'RULE-02',
      title: 'Maintainable over clever',
      body: "Code gets read a lot more than it gets written. I'd rather ship the obvious version than something clever I have to explain in review.",
    },
    {
      code: 'RULE-03',
      title: 'Keep it fast on purpose',
      body: 'I keep change detection cheap with OnPush and signals, and lazy-load what I can. When something feels slow, I measure it instead of guessing.',
    },
    {
      code: 'RULE-04',
      title: 'Plan for scale early',
      body: 'Clear tenant boundaries and predictable data flow early on save a lot of pain later, when both the load and the team get bigger.',
    },
    {
      code: 'RULE-05',
      title: "Migrate, don't rewrite",
      body: 'We took an app from Angular 11 to 17 without pausing releases. Small, reversible steps almost always beat a big rewrite.',
    },
    {
      code: 'RULE-06',
      title: "Don't skip the basics",
      body: "Reviews, tests, and accessibility aren't extra work. They're what lets the next change go in without breaking things.",
    },
  ];
}
