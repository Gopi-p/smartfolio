import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

type Group = 'all' | 'frontend' | 'backend' | 'tools' | 'familiar';

interface Skill {
  name: string;
  group: Exclude<Group, 'all'>;
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="relative py-24 md:py-32" aria-labelledby="skills-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-6">
            <span class="eyebrow">05 · Stack</span>
            <h2 id="skills-heading" class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none">
              The <span class="text-amber italic">working set.</span>
            </h2>
          </div>
          <div class="md:col-span-5 md:col-start-8 self-end">
            <p class="text-mist leading-relaxed">
              No percentage bars. A tool is either load bearing or it isn't.
              Filter to focus on a category.
            </p>
          </div>
        </div>

        <!-- Filter chips -->
        <div appReveal class="mb-10 flex flex-wrap items-center gap-2">
          @for (filter of filters; track filter.id) {
            <button
              type="button"
              (click)="active.set(filter.id)"
              class="chip"
              [class.is-active]="active() === filter.id"
            >
              {{ filter.label }}
            </button>
          }
        </div>

        <!-- Skills tag cloud -->
        <div appReveal class="flex flex-wrap gap-3">
          @for (skill of visible(); track skill.name) {
            <span class="skill-tag" [attr.data-group]="skill.group">
              {{ skill.name }}
            </span>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly active = signal<Group>('all');

  readonly skills: Skill[] = [
    { name: 'Angular', group: 'frontend' },
    { name: 'TypeScript', group: 'frontend' },
    { name: 'JavaScript', group: 'frontend' },
    { name: 'Fabric.js', group: 'frontend' },
    { name: 'Signals', group: 'frontend' },
    { name: 'RxJS', group: 'frontend' },
    { name: 'PrimeNG', group: 'frontend' },
    { name: 'Flutter', group: 'frontend' },
    { name: 'Tailwind', group: 'frontend' },
    { name: 'Node.js', group: 'backend' },
    { name: 'MongoDB', group: 'backend' },
    { name: 'GraphQL', group: 'backend' },
    { name: 'REST APIs', group: 'backend' },
    { name: 'Microservices', group: 'backend' },
    { name: 'Schema design', group: 'backend' },
    { name: 'Multi-tenant', group: 'backend' },
    { name: 'AWS · S3', group: 'tools' },
    { name: 'Firebase', group: 'tools' },
    { name: 'Docker', group: 'tools' },
    { name: 'CI/CD', group: 'tools' },
    { name: 'Git', group: 'tools' },
    { name: 'SQL', group: 'familiar' },
    { name: 'Unit Testing', group: 'familiar' },
    { name: 'System Design', group: 'familiar' },
    { name: 'Agile', group: 'familiar' },
  ];

  readonly filters = [
    { id: 'all' as const, label: 'All' },
    { id: 'frontend' as const, label: 'Frontend' },
    { id: 'backend' as const, label: 'Backend' },
    { id: 'tools' as const, label: 'Tools' },
    { id: 'familiar' as const, label: 'Familiar' },
  ];

  readonly visible = computed(() => {
    const group = this.active();
    if (group === 'all') return this.skills;
    return this.skills.filter((s) => s.group === group);
  });
}
