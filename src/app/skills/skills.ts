import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

type Group = 'all' | 'frontend' | 'backend' | 'tools' | 'familiar';

interface Skill {
  name: string;
  group: Exclude<Group, 'all'>;
}

interface Principle {
  title: string;
  body: string;
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="relative py-24 md:py-32">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-6">
            <span class="eyebrow">03 · Stack</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none">
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

        <!-- Working principles -->
        <div class="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div appReveal class="md:col-span-4">
            <span class="eyebrow">Working principles</span>
            <p class="mt-3 text-mist text-sm leading-relaxed">
              What I default to, even on small tickets.
            </p>
          </div>
          <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            @for (principle of principles; track principle.title; let i = $index) {
              <div
                appReveal
                class="p-5 rounded-xl border border-edge bg-night-2/40 hover:bg-night-2/70 hover:border-coral/50 transition-colors group"
              >
                <div class="flex items-baseline gap-3">
                  <span class="font-mono text-[11px] text-coral">·{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
                  <h3 class="font-display text-xl font-semibold group-hover:text-coral transition-colors">{{ principle.title }}</h3>
                </div>
                <p class="mt-2 text-sm text-mist leading-relaxed">{{ principle.body }}</p>
              </div>
            }
          </div>
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
    { name: 'Flutter', group: 'frontend' },
    { name: 'Tailwind', group: 'frontend' },
    { name: 'Node.js', group: 'backend' },
    { name: 'MongoDB', group: 'backend' },
    { name: 'GraphQL', group: 'backend' },
    { name: 'REST APIs', group: 'backend' },
    { name: 'Schema design', group: 'backend' },
    { name: 'Multi-tenant', group: 'backend' },
    { name: 'AWS · S3', group: 'tools' },
    { name: 'Firebase', group: 'tools' },
    { name: 'Docker', group: 'tools' },
    { name: 'Git', group: 'tools' },
    { name: 'SQL', group: 'familiar' },
    { name: 'Unit Testing', group: 'familiar' },
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

  readonly principles: Principle[] = [
    {
      title: 'Model the data first.',
      body: 'A UI that fights its data is the wrong UI. Get the schema right, then the screen.',
    },
    {
      title: 'OnPush by default.',
      body: 'Default change detection is a budget waiting to blow up. Start strict, loosen later.',
    },
    {
      title: 'Migrate, don\'t rewrite.',
      body: 'Angular 11 to 17 happened while we kept shipping. Yours can too if you sequence it.',
    },
    {
      title: 'Ship the boring bit.',
      body: 'Standards, reviews, and clear schemas beat clever code that has to be explained.',
    },
  ];
}
