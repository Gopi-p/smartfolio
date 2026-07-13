import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface System {
  name: string;
  blurb: string;
  tags: string[];
  glyph: string;
}

@Component({
  selector: 'app-built',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="systems" class="relative py-24 md:py-32" aria-labelledby="systems-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <!-- Header -->
        <div appReveal class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div class="md:col-span-6">
            <span class="eyebrow">02 · Systems</span>
            <h2 id="systems-heading" class="mt-4 font-display text-5xl md:text-6xl font-bold leading-none">
              Systems I've <span class="text-coral italic">built.</span>
            </h2>
          </div>
          <div class="md:col-span-5 md:col-start-8 self-end">
            <p class="text-mist leading-relaxed">
              The core modules I've designed and shipped across my work. Listed by
              what they do, not which company they were for.
            </p>
          </div>
        </div>

        <!-- Systems grid -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (system of systems; track system.name) {
            <li
              appReveal
              class="group h-full p-6 rounded-2xl border border-edge bg-night-2/40 hover:bg-night-2/70 hover:border-coral/50 transition-colors"
            >
              <div class="text-2xl" aria-hidden="true">{{ system.glyph }}</div>
              <h3 class="mt-4 font-display text-xl font-semibold group-hover:text-coral transition-colors">
                {{ system.name }}
              </h3>
              <p class="mt-2 text-sm text-mist leading-relaxed">{{ system.blurb }}</p>
              <div class="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                @for (tag of system.tags; track tag) {
                  <span class="font-mono text-[10px] uppercase tracking-widest text-fog">· {{ tag }}</span>
                }
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class BuiltComponent {
  readonly systems: System[] = [
    {
      name: 'Canvas Layout Editor',
      blurb:
        "A drag-and-drop editor for retail store planograms. Walls, entrances, and fixtures you can place and arrange, with the whole layout saved as JSON and re-rendered next time.",
      tags: ['Fabric.js', 'Angular', 'MongoDB'],
      glyph: '🗺️',
    },
    {
      name: 'DXF/DWG to Canvas',
      blurb:
        'Reads a store layout straight out of a CAD file, pulls the parts that actually matter, and rebuilds it as an editable canvas planogram.',
      tags: ['CAD parsing', 'Geometry', 'Canvas'],
      glyph: '📐',
    },
    {
      name: 'REST to GraphQL Migration',
      blurb:
        'Moved a 200+ endpoint API from REST to GraphQL so the frontend could ask for exactly the data it needed, and nothing more.',
      tags: ['GraphQL', 'Node.js', 'Schema'],
      glyph: '🔀',
    },
    {
      name: 'Multi-Tenant Architecture',
      blurb:
        "Kept each organization's data separated on shared infrastructure, so one platform can serve many of them safely.",
      tags: ['Architecture', 'Backend', 'Scale'],
      glyph: '🏢',
    },
    {
      name: 'Authentication Flow',
      blurb:
        'JWT-based sign-in on Firebase, shared across the web app and a Flutter mobile app so both live behind one identity.',
      tags: ['Auth', 'Firebase', 'JWT'],
      glyph: '🔐',
    },
    {
      name: 'Role-Based Access Control',
      blurb:
        'Roles and permissions that decide who can see and do what, checked everywhere it matters.',
      tags: ['RBAC', 'Permissions', 'Policy'],
      glyph: '🛡️',
    },
    {
      name: 'Server Logging System (LogDesk)',
      blurb:
        'Reusable middleware that records every write API call (who, when, request, response, and the collections touched) into OpenSearch, plus LogDesk, a web tool to read it all back in a searchable, filterable table.',
      tags: ['OpenSearch', 'Middleware', 'Observability'],
      glyph: '🧾',
    },
    {
      name: 'AI Eyetest Module',
      blurb:
        "Lets an optometrist drive a real eye-test machine from the browser, over a WebSocket link to the machine's hardware server.",
      tags: ['WebSocket', 'Hardware', 'Realtime'],
      glyph: '👁️',
    },
  ];
}
