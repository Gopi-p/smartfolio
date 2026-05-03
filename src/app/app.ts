import { Component, signal, HostListener, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <div class="relative min-h-screen">
      <!-- Custom Cursor -->
      <div
        #cursor
        class="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        [style.transform]="'translate(' + cursorX() + 'px, ' + cursorY() + 'px) scale(' + cursorScale() + ')'"
      ></div>

      <!-- Cursor Trail -->
      <div
        #cursorTrail
        class="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-40 opacity-60 transition-all duration-300 ease-out"
        [style.transform]="'translate(' + trailX() + 'px, ' + trailY() + 'px)'"
      ></div>

      <!-- Interactive Background -->
      <div class="fixed inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

        <!-- Floating Particles -->
        @for (particle of particles(); track particle.id) {
          <div
            class="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            [style.left.%]="particle.x"
            [style.top.%]="particle.y"
            [style.animation-delay.ms]="particle.delay"
            [style.animation-duration.s]="particle.duration"
          ></div>
        }

        <!-- Interactive Gradient Orbs -->
        <div
          class="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          [style.transform]="'translate(' + orb1X() + 'px, ' + orb1Y() + 'px)'"
        ></div>
        <div
          class="absolute w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          [style.transform]="'translate(' + orb2X() + 'px, ' + orb2Y() + 'px)'"
          style="animation-delay: 2s;"
        ></div>
      </div>

      <!-- Main Content -->
      <app-navigation></app-navigation>
      <main>
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <p class="text-gray-400">
              © 2026 Gopinath P. Built with ❤️ using Angular & Tailwind CSS.
            </p>
            <div class="mt-4 flex justify-center space-x-6">
              <a
                href="https://github.com/Gopi-p"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/p-gopinath/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    /* Smooth scrolling for the entire app */
    html {
      scroll-behavior: smooth;
    }

    /* Custom cursor styles */
    * {
      cursor: none !important;
    }

    a, button, input, textarea, select {
      cursor: none !important;
    }

    /* Hide default cursor on interactive elements when custom cursor is active */
    .cursor-pointer,
    .cursor-text,
    .cursor-move {
      cursor: none !important;
    }
  `]
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('smartfolio');

  // Cursor tracking
  cursorX = signal(0);
  cursorY = signal(0);
  cursorScale = signal(1);

  // Cursor trail
  trailX = signal(0);
  trailY = signal(0);

  // Interactive background orbs
  orb1X = signal(0);
  orb1Y = signal(0);
  orb2X = signal(0);
  orb2Y = signal(0);

  // Floating particles
  particles = signal<Array<{id: number, x: number, y: number, delay: number, duration: number}>>([]);

  @ViewChild('cursor', { static: true }) cursor!: ElementRef;
  @ViewChild('cursorTrail', { static: true }) cursorTrail!: ElementRef;

  private animationFrame: number | null = null;

  ngAfterViewInit() {
    this.initializeParticles();
    this.startCursorTracking();
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update cursor position
    this.cursorX.set(mouseX - 12); // Center the cursor
    this.cursorY.set(mouseY - 12);

    // Update trail with slight delay
    setTimeout(() => {
      this.trailX.set(mouseX - 4);
      this.trailY.set(mouseY - 4);
    }, 50);

    // Update interactive orbs (parallax effect)
    this.orb1X.set((mouseX - window.innerWidth / 2) * 0.02);
    this.orb1Y.set((mouseY - window.innerHeight / 2) * 0.02);
    this.orb2X.set((mouseX - window.innerWidth / 2) * -0.015);
    this.orb2Y.set((mouseY - window.innerHeight / 2) * -0.015);
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.cursorScale.set(0.8);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.cursorScale.set(1);
  }

  @HostListener('document:mouseenter', ['$event.target'])
  onMouseEnter(target: EventTarget | null) {
    // Scale up cursor on interactive elements
    if (target && target instanceof HTMLElement) {
      if (target.tagName === 'A' || target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        this.cursorScale.set(1.5);
      }
    }
  }

  @HostListener('document:mouseleave', ['$event.target'])
  onMouseLeave(target: EventTarget | null) {
    this.cursorScale.set(1);
  }

  private initializeParticles() {
    const particleCount = 20;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2000,
        duration: 3 + Math.random() * 4
      });
    }

    this.particles.set(particles);
  }

  private startCursorTracking() {
    // Smooth cursor following animation
    const updateCursor = () => {
      this.animationFrame = requestAnimationFrame(updateCursor);
    };
    updateCursor();
  }
}
