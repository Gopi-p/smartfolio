import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Service {
  unit: string;
  name: string;
  blurb: string;
  tags: string[];
}

@Component({
  selector: 'app-built',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view max-w-5xl px-6 md:px-12 py-12 md:py-16">
      <div class="crumb">gopinath <span class="sep">~/</span> systems</div>
      <div class="mt-7 mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 class="font-display text-3xl md:text-5xl font-bold">Things I've built.</h1>
        <p class="text-body text-sm md:text-base max-w-md">
          Systems I've built and reused across products. Listed by what they do, not which company
          they were for.
        </p>
      </div>

      <!-- Service list -->
      <div appReveal class="panel overflow-hidden">
        <div
          class="hidden md:grid grid-cols-12 gap-6 px-6 py-3 border-b border-line font-mono text-[10px] uppercase tracking-[0.16em] text-meta"
          aria-hidden="true"
        >
          <div class="col-span-3">unit</div>
          <div class="col-span-6">description</div>
          <div class="col-span-3">tags</div>
        </div>

        <ul class="divide-y divide-line">
          @for (service of services; track service.unit) {
            <li
              class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 px-6 py-5 hover:bg-panel-2 transition-colors"
            >
              <div class="md:col-span-3 flex items-start gap-2.5">
                <span class="dot-ok mt-1.5 shrink-0" aria-hidden="true"></span>
                <div>
                  <div class="font-mono text-[13px] text-select">{{ service.unit }}</div>
                  <div class="mt-0.5 font-medium text-ink text-sm">{{ service.name }}</div>
                </div>
              </div>
              <p class="md:col-span-6 text-sm text-body leading-relaxed">
                {{ service.blurb }}
              </p>
              <div class="md:col-span-3 flex flex-wrap content-start gap-x-3 gap-y-1">
                @for (tag of service.tags; track tag) {
                  <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-meta">
                    · {{ tag }}
                  </span>
                }
              </div>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class BuiltComponent {
  readonly services: Service[] = [
    {
      unit: 'canvas-editor',
      name: 'Canvas Layout Editor',
      blurb:
        "A drag and drop editor for retail planograms. Fixtures, zoom, pan, and a layout that's still there after a refresh.",
      tags: ['Fabric.js', 'Angular', 'Signals'],
    },
    {
      unit: 'graphql-gateway',
      name: 'REST to GraphQL Migration',
      blurb:
        'Moved a multi-tenant API from REST to GraphQL so the frontend could ask for exactly the data it needed.',
      tags: ['GraphQL', 'Node.js', 'Schema'],
    },
    {
      unit: 'tenant-core',
      name: 'Multi-Tenant Architecture',
      blurb:
        "Kept each organization's data separate on shared infrastructure, so one platform can serve many of them safely.",
      tags: ['Architecture', 'Backend', 'Scale'],
    },
    {
      unit: 'auth-identity',
      name: 'Authentication & Identity',
      blurb:
        'Sign-in, sessions, and account handling. The front door that everything else depends on.',
      tags: ['Auth', 'Security', 'Sessions'],
    },
    {
      unit: 'rbac-policy',
      name: 'Role-Based Access Control',
      blurb:
        'Roles and permissions that decide who can see and do what, checked everywhere it matters.',
      tags: ['RBAC', 'Permissions', 'Policy'],
    },
    {
      unit: 'notify-hub',
      name: 'Notification System',
      blurb:
        'One place to send in-app and email alerts, so a single event can reach people through a few channels.',
      tags: ['Events', 'Realtime', 'UX'],
    },
  ];
}
