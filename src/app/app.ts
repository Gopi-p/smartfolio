import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation';
import { CommandPaletteComponent } from './shared/command-palette';
import { ToastOutletComponent } from './shared/toast-outlet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, CommandPaletteComponent, ToastOutletComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative min-h-screen text-ivory">
      <app-navigation />
      <main class="relative z-10">
        <router-outlet />
      </main>
      <app-command-palette />
      <app-toast-outlet />
    </div>
  `,
})
export class App {}
