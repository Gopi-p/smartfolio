import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-outlet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2 pointer-events-none"
    >
      @for (toast of toasts.toasts(); track toast.id) {
        <div
          class="toast pointer-events-auto px-4 py-2 rounded-lg text-sm font-mono
                 bg-panel-2 text-ink border border-line-hi shadow-lg shadow-black/50"
        >
          <span class="text-select mr-2">●</span>{{ toast.message }}
        </div>
      }
    </div>
  `,
})
export class ToastOutletComponent {
  readonly toasts = inject(ToastService);
}
