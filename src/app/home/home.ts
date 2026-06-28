import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { BuiltComponent } from '../built/built';
import { ProjectsComponent } from '../projects/projects';
import { PhilosophyComponent } from '../philosophy/philosophy';
import { SkillsComponent } from '../skills/skills';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    BuiltComponent,
    ProjectsComponent,
    PhilosophyComponent,
    SkillsComponent,
    ContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about />
    <app-built />
    <app-projects />
    <app-philosophy />
    <app-skills />
    <app-contact />

    <footer class="border-t border-edge py-12">
      <div class="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
        <div class="md:col-span-5">
          <div class="font-display font-bold text-2xl">gopinath<span class="text-coral">.</span></div>
          <div class="mt-2 font-mono text-[11px] text-fog">© 2026 Gopinath P. Chennai, IN.</div>
        </div>
        <div class="md:col-span-4">
          <p class="font-mono text-[11px] text-fog leading-relaxed">
            Built with Angular and Tailwind. Type set in Space Grotesk, Inter, and JetBrains Mono.
            Hand coded and hand reviewed.
          </p>
        </div>
        <div class="md:col-span-3 md:text-right">
          <a
            href="#top"
            class="font-mono text-[10px] uppercase tracking-widest text-fog hover:text-coral transition-colors"
          >back to top ↑</a>
        </div>
      </div>
    </footer>
  `,
})
export class HomeComponent {}
