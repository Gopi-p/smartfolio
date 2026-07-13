import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { createFluidCursor } from './fluid-cursor';

/**
 * A subtle, theme-matched fluid cursor drawn on a full-screen canvas behind the
 * content. The pointer itself stays a custom SVG arrow (set in CSS). Enabled
 * only on fine-pointer devices with motion allowed; otherwise nothing runs.
 */
@Component({
  selector: 'app-cursor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas class="cursor-fluid" aria-hidden="true"></canvas>`,
})
export class CursorComponent {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup() {
    const finePointer = matchMedia('(pointer: fine)').matches;
    const motionOk = matchMedia('(prefers-reduced-motion: no-preference)').matches;
    if (!finePointer || !motionOk) return;

    try {
      const dispose = createFluidCursor(this.canvasRef().nativeElement);
      this.destroyRef.onDestroy(dispose);
    } catch {
      // WebGL unavailable: skip the effect, the site is fine without it.
    }
  }
}
