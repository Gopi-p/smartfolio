import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  title: string;
  value: string;
  href?: string;
  icon: string;
  color: string;
  gradient: string;
}

interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="py-24 bg-slate-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span class="text-blue-400">Touch</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, interesting projects,
            or just having a chat about technology and software development.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="contactData.name"
                  required
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your full name"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="contactData.email"
                  required
                  email
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="contactData.subject"
                  required
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                >
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="contactData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.form.valid"
                class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Info Cards -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:p.gopinath.work@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      p.gopinath.work@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+916369327257" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      +91 6369 327 257
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Location</h4>
                    <p class="text-gray-400">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div class="space-y-4">
                <a href="https://www.linkedin.com/in/p-gopinath/" target="_blank" rel="noopener noreferrer"
                   class="flex items-center p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 group">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">LinkedIn</h4>
                    <p class="text-gray-400 text-sm">Professional network & updates</p>
                  </div>
                </a>

                <a href="https://github.com/Gopi-p" target="_blank" rel="noopener noreferrer"
                   class="flex items-center p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 group">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">GitHub</h4>
                    <p class="text-gray-400 text-sm">Open source contributions & code</p>
                  </div>
                </a>

                <a href="https://gopicraft.dev" target="_blank" rel="noopener noreferrer"
                   class="flex items-center p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 group">
                  <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Personal Website</h4>
                    <p class="text-gray-400 text-sm">Blog & personal projects</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Resume Download -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-white mb-6">Download My Resume</h3>
              <p class="text-gray-400 mb-6">Get the full details of my experience and skills</p>
              <a
                href="/assets/resume.txt"
                download
                class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactData);
  }
}
