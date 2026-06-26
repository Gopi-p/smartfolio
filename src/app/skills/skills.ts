import { ChangeDetectionStrategy, Component } from '@angular/core';

interface CapabilityGroup {
  heading: string;
  intro: string;
  items: string[];
}

interface Practice {
  title: string;
  body: string;
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="capabilities" class="py-24 md:py-32 border-t border-rule">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div class="md:col-span-3">
            <span class="eyebrow">§ 03</span>
            <h2 class="mt-4 font-display text-5xl md:text-6xl leading-none">
              Capabilities<br/>
              <span class="italic text-accent">at a glance</span>
            </h2>
          </div>
          <div class="md:col-span-7 md:col-start-5 self-end">
            <p class="text-paper-muted leading-relaxed max-w-2xl">
              No percentage bars. A skill is either load-bearing or it isn't.
              Below is the working set — what I reach for first, what I keep
              sharp, what I touch occasionally without pretending otherwise.
            </p>
          </div>
        </div>

        <!-- Capability groups -->
        <div class="space-y-16 md:space-y-20">
          @for (group of groups; track group.heading) {
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-rule pt-10">
              <div class="md:col-span-3">
                <div class="font-mono text-[10px] uppercase tracking-widest text-accent">{{ group.heading }}</div>
                <p class="mt-3 text-sm text-paper-dim leading-relaxed">{{ group.intro }}</p>
              </div>

              <div class="md:col-span-9">
                <ul class="flex flex-wrap items-baseline gap-x-6 gap-y-3 font-display">
                  @for (item of group.items; track item; let last = $last) {
                    <li class="flex items-baseline gap-6">
                      <span class="text-3xl md:text-4xl text-paper">{{ item }}</span>
                      @if (!last) {
                        <span class="text-2xl text-accent">/</span>
                      }
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>

        <!-- Practices -->
        <div class="mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div class="md:col-span-3">
            <div class="font-mono text-[10px] uppercase tracking-widest text-accent">Working principles</div>
          </div>
          <div class="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
            @for (practice of practices; track practice.title) {
              <div>
                <div class="font-display italic text-2xl text-paper">{{ practice.title }}</div>
                <p class="mt-2 text-sm text-paper-muted leading-relaxed">{{ practice.body }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly groups: CapabilityGroup[] = [
    {
      heading: 'Frontend',
      intro: 'Where most of the time goes. Modern Angular, signals-first.',
      items: ['Angular', 'TypeScript', 'JavaScript', 'Fabric.js', 'Flutter'],
    },
    {
      heading: 'Backend & tools',
      intro: 'API design, schema modeling, query optimization. Not just glue.',
      items: ['Node.js', 'MongoDB', 'GraphQL', 'REST APIs', 'AWS · S3', 'Firebase', 'Docker', 'Git'],
    },
    {
      heading: 'Familiar',
      intro: 'Used, not lived in. Comfortable enough to read and ship from.',
      items: ['SQL', 'Unit Testing', 'Agile'],
    },
  ];

  readonly practices: Practice[] = [
    {
      title: 'Read the schema first.',
      body: 'A UI that fights its data is the wrong UI. I model the data, then the screen.',
    },
    {
      title: 'OnPush by default.',
      body: 'Default change detection is a budget waiting to be exceeded. Start strict.',
    },
    {
      title: 'Migrate, don’t rewrite.',
      body: 'Angular 11 to 17 happened in flight. So can yours, if you sequence it.',
    },
    {
      title: 'Standards over preferences.',
      body: 'A reviewed PR with shared standards beats a beautiful PR without them.',
    },
  ];
}
