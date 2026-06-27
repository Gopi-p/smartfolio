import { Injectable, signal } from '@angular/core';

interface Toast {
  id: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  readonly toasts = signal<Toast[]>([]);

  show(message: string, duration = 2200) {
    const id = ++this.nextId;
    this.toasts.update((arr) => [...arr, { id, message }]);
    setTimeout(() => {
      this.toasts.update((arr) => arr.filter((t) => t.id !== id));
    }, duration);
  }
}
