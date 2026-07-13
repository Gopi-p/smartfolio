import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface ManifestGroup {
  key: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> stack.json</div>
      <div class="mt-7 mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 class="font-display text-3xl md:text-5xl font-bold">The working set.</h1>
        <p class="text-body text-sm md:text-base max-w-md">
          No percentage bars. A tool is either load bearing or it isn't.
        </p>
      </div>

      <!-- Manifest file -->
      <div appReveal class="panel overflow-hidden">
        <div class="flex items-center justify-between px-5 py-2.5 border-b border-line bg-panel-2">
          <span class="font-mono text-[11px] text-body">stack.manifest</span>
          <span class="font-mono text-[10px] text-meta">read-only</span>
        </div>
        <div class="p-5 md:p-7 font-mono text-[13px] md:text-sm leading-loose overflow-x-auto">
          @for (group of groups; track group.key) {
            <div class="flex flex-wrap items-baseline gap-x-1.5">
              <span class="text-select w-24 md:w-28 shrink-0">{{ group.key }}</span>
              <span class="text-meta">=</span>
              <span class="text-meta">[</span>
              @for (item of group.items; track item; let last = $last) {
                <span class="text-body hover:text-ink transition-colors cursor-default">{{
                  item
                }}</span>
                @if (!last) {
                  <span class="text-meta">,</span>
                }
              }
              <span class="text-meta">]</span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class SkillsComponent {
  readonly groups: ManifestGroup[] = [
    {
      key: 'frontend',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Fabric.js',
        'Signals',
        'RxJS',
        'PrimeNG',
        'Flutter',
        'Tailwind',
      ],
    },
    {
      key: 'backend',
      items: [
        'Node.js',
        'MongoDB',
        'GraphQL',
        'REST APIs',
        'Microservices',
        'Schema design',
        'Multi-tenant',
      ],
    },
    {
      key: 'tools',
      items: ['AWS S3', 'Firebase', 'Docker', 'CI/CD', 'Git'],
    },
    {
      key: 'familiar',
      items: ['SQL', 'Unit Testing', 'System Design', 'Agile'],
    },
  ];
}
