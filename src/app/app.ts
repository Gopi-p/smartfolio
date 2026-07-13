import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation';
import { CommandPaletteComponent } from './shared/command-palette';
import { ToastOutletComponent } from './shared/toast-outlet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, CommandPaletteComponent, ToastOutletComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative min-h-screen text-ink">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <app-navigation />
      <main id="main-content" class="relative z-10" tabindex="-1">
        <router-outlet />
      </main>
      <app-command-palette />
      <app-toast-outlet />
    </div>
  `,
})
export class App {
  constructor() {
    // Router anchor scrolling ignores CSS scroll-margin-top; offset for the fixed nav.
    inject(ViewportScroller).setOffset([0, 84]);
  }
}
