import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  template: `
    <nav class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a [routerLink]="['/']" class="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              GP
            </a>
          </div>

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-1">
              <a routerLink="/" routerLinkActive="text-blue-400" [routerLinkActiveOptions]="{exact: true}"
                 class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-slate-800/50 rounded-md">
                Home
              </a>
              <a (click)="scrollToSection('about')"
                 class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-slate-800/50 rounded-md">
                About
              </a>
              <a (click)="scrollToSection('projects')"
                 class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-slate-800/50 rounded-md">
                Projects
              </a>
              <a (click)="scrollToSection('skills')"
                 class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-slate-800/50 rounded-md">
                Skills
              </a>
              <a (click)="scrollToSection('contact')"
                 class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-slate-800/50 rounded-md">
                Contact
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-300">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path *ngIf="isMobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div *ngIf="isMobileMenuOpen()" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            <a routerLink="/" routerLinkActive="text-blue-400" [routerLinkActiveOptions]="{exact: true}"
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-300">
              Home
            </a>
            <a (click)="scrollToSection('about'); closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-300">
              About
            </a>
            <a (click)="scrollToSection('projects'); closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-300">
              Projects
            </a>
            <a (click)="scrollToSection('skills'); closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-300">
              Skills
            </a>
            <a (click)="scrollToSection('contact'); closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  private router = inject(Router);
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string) {
    // If we're not on the home page, navigate there first
    if (this.router.url !== '/home' && this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}