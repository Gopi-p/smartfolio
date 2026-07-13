import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface SpecRow {
  label: string;
  value: string;
  accent?: 'ok';
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="specs" class="relative py-20 md:py-28" aria-labelledby="specs-heading">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center">
          <div appReveal class="eyebrow">tech specs</div>
          <h2
            id="specs-heading"
            appReveal
            class="mt-4 font-display font-extrabold text-4xl md:text-6xl"
          >
            The working set.
          </h2>
          <p appReveal class="mt-5 text-body text-lg leading-relaxed max-w-xl mx-auto">
            No percentage bars. A tool is either load bearing or it isn't.
          </p>
        </div>

        <div appReveal class="mt-14">
          @for (row of rows; track row.label) {
            <div class="spec-row">
              <div class="text-meta text-sm">{{ row.label }}</div>
              <div
                class="text-[15px] leading-relaxed"
                [class.text-ink]="!row.accent"
                [class.text-ok]="row.accent === 'ok'"
              >
                {{ row.value }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly rows: SpecRow[] = [
    {
      label: 'Frontend',
      value:
        'Angular · TypeScript · JavaScript · Fabric.js · Signals · RxJS · PrimeNG · Flutter · Tailwind',
    },
    {
      label: 'Backend',
      value:
        'Node.js · MongoDB · GraphQL · REST APIs · Microservices · Schema design · Multi-tenant',
    },
    {
      label: 'Tools',
      value: 'AWS S3 · Firebase · Docker · CI/CD · Git',
    },
    {
      label: 'Also',
      value: 'SQL · Unit Testing · System Design · Agile',
    },
    {
      label: 'Systems built',
      value:
        'Canvas layout editor · REST to GraphQL migration · Multi-tenant architecture · Authentication & identity · Role-based access control · Notifications',
    },
    {
      label: 'Experience',
      value: 'About five years · three roles · one team of seven',
    },
    {
      label: 'Education',
      value: 'MCA, University of Madras (2024) · B.Sc Physics & CS, SASTRA University (2021)',
    },
    {
      label: 'Base',
      value: 'Chennai, India · IST',
    },
    {
      label: 'Status',
      value: 'Available · Open to new work',
      accent: 'ok',
    },
  ];
}
