import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { ProjectsComponent } from '../projects/projects';
import { AboutComponent } from '../about/about';
import { PhilosophyComponent } from '../philosophy/philosophy';
import { SkillsComponent } from '../skills/skills';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    PhilosophyComponent,
    SkillsComponent,
    ContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-projects />
    <app-about />
    <app-philosophy />
    <app-skills />
    <app-contact />

    <footer class="border-t border-line py-12">
      <div
        class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      >
        <div class="text-sm text-meta">© 2026 Gopinath P · Chennai, IN</div>
        <p class="text-sm text-meta">
          Built with Angular and Tailwind. Hand coded and hand reviewed.
        </p>
        <a href="#top" class="text-sm text-meta hover:text-select transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  `,
})
export class HomeComponent {}
