import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { ProjectsComponent } from '../projects/projects';
import { SkillsComponent } from '../skills/skills';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about />
    <app-projects />
    <app-skills />
    <app-contact />

    <footer class="border-t border-rule mt-24 py-12">
      <div class="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
        <div class="md:col-span-4">
          <div class="font-display italic text-2xl text-paper">gp<span class="text-accent">.</span></div>
          <div class="mt-2 font-mono text-[11px] text-paper-dim">© MMXXVI · Gopinath P.</div>
        </div>

        <div class="md:col-span-5 md:col-start-6">
          <p class="font-mono text-[11px] text-paper-dim leading-relaxed">
            Set in <span class="text-paper-muted">Fraunces</span> and
            <span class="text-paper-muted">Inter</span>, with
            <span class="text-paper-muted">JetBrains Mono</span> for technical accents.
            Built with Angular and Tailwind, hand-edited at terminal width.
          </p>
        </div>

        <div class="md:col-span-3 md:text-right">
          <a
            href="#masthead"
            class="font-mono text-[10px] uppercase tracking-widest text-paper-dim hover:text-accent transition-colors"
          >↑ Return to the masthead</a>
        </div>
      </div>
    </footer>
  `,
})
export class HomeComponent {}
