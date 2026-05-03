import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <!-- Cursor follower -->
    <div
      class="cursor-follower"
      [style.left.px]="cursorPosition().x"
      [style.top.px]="cursorPosition().y"
      [style.transform]="cursorScale() ? 'scale(1.5)' : 'scale(1)'"
    ></div>

    <!-- Hero Section -->
    <section class="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      <!-- Subtle animated background grid -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: linear-gradient(0deg, transparent 24%, rgba(148, 163, 184, .05) 25%, rgba(148, 163, 184, .05) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, .05) 75%, rgba(148, 163, 184, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(148, 163, 184, .05) 25%, rgba(148, 163, 184, .05) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, .05) 75%, rgba(148, 163, 184, .05) 76%, transparent 77%, transparent); background-size: 50px 50px;"></div>
      </div>

      <!-- Subtle background orbs -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>

      <!-- Main content -->
      <div class="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Animated greeting -->
          <div class="mb-8 animate-fade-in-down">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-2">
              Hi, I'm <span class="text-blue-400">Gopinath</span>
            </h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <!-- Typing animation for role -->
          <div class="mb-8 animate-fade-in" style="animation-delay: 0.3s;">
            <div class="text-xl md:text-2xl text-gray-300 font-light h-8">
              <span class="typing-text">{{ displayText() }}</span><span class="typing-cursor">|</span>
            </div>
          </div>

          <!-- Description -->
          <div class="max-w-2xl mx-auto mb-12 animate-fade-in" style="animation-delay: 0.6s;">
            <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
              Building scalable frontend systems and high-performance user interfaces with Angular. 
              Strong foundation in backend architecture and enterprise-scale SaaS applications.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style="animation-delay: 0.9s;">
            <a
              href="/assets/resume.txt"
              download
              class="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </a>

            <a
              href="#contact"
              class="group px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get In Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center space-x-6 animate-fade-in" style="animation-delay: 1.2s;">
            <a
              href="https://github.com/Gopi-p"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-lg bg-slate-900/50 border border-slate-700 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/p-gopinath/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-lg bg-slate-900/50 border border-slate-700 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-slate-900/80 transition-all duration-300"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="mailto:p.gopinath.work@gmail.com"
              class="p-3 rounded-lg bg-slate-900/50 border border-slate-700 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-slate-900/80 transition-all duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <span class="text-sm mb-2">Scroll to explore</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Fade in animations */
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-down {
      animation: fadeInDown 0.6s ease-out;
    }

    .animate-fade-in {
      animation: fadeIn 0.8s ease-out;
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out;
    }

    /* Typing cursor */
    .typing-cursor {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 49% {
        opacity: 1;
      }
      50%, 100% {
        opacity: 0;
      }
    }
  `]
})
export class HeroComponent {
  private elementRef = inject(ElementRef);

  cursorPosition = signal({ x: 0, y: 0 });
  cursorScale = signal(false);
  particles = signal(this.generateParticles());

  // Typing animation
  fullText = "Software Engineer • Frontend Systems • Scalable SaaS Applications";
  displayText = signal('');
  currentIndex = 0;

  constructor() {
    this.startTypingAnimation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorPosition.set({ x: event.clientX, y: event.clientY });
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.cursorScale.set(true);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.cursorScale.set(false);
  }

  onProfileHover(hovering: boolean) {
    // Add any additional hover effects here
  }

  private startTypingAnimation() {
    const typeNextChar = () => {
      if (this.currentIndex < this.fullText.length) {
        this.displayText.set(this.fullText.slice(0, this.currentIndex + 1));
        this.currentIndex++;
        setTimeout(typeNextChar, 50); // Adjust typing speed here
      }
    };
    typeNextChar();
  }

  private generateParticles() {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20000,
        duration: 15000 + Math.random() * 10000
      });
    }
    return particles;
  }
}