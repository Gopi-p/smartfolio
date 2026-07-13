import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation';
import { ToastOutletComponent } from './shared/toast-outlet';
import { CursorComponent } from './shared/cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, ToastOutletComponent, CursorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative min-h-screen text-ivory">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <app-navigation />
      <main id="main-content" class="relative z-10" tabindex="-1">
        <router-outlet />
      </main>
      <app-toast-outlet />
      <app-cursor />
    </div>
  `,
})
export class App {
  constructor() {
    // Router anchor scrolling ignores CSS scroll-margin-top; offset for the fixed header.
    inject(ViewportScroller).setOffset([0, 96]);
  }
}
