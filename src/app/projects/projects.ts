import { Component, signal } from '@angular/core';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  impact: string;
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-24 bg-slate-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span class="text-blue-400">Projects</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into the systems I\'ve built, from canvas-based enterprise applications to scalable SaaS platforms.
          </p>
        </div>

        <!-- Project Cards -->
        <div class="space-y-16">
          @for (project of projects(); track project.id) {
            <div class="group relative">
              <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                <div class="md:flex">
                  <!-- Content Section -->
                  <div class="md:w-1/2 p-8 md:p-12">
                    <!-- Project Header -->
                    <div class="flex items-center mb-6">
                      <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                        <span class="text-xl">{{ project.icon }}</span>
                      </div>
                      <div>
                        <h3 class="text-2xl font-bold text-white mb-1">{{ project.title }}</h3>
                        <p class="text-blue-400 font-medium">{{ project.subtitle }}</p>
                      </div>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-400 mb-6 leading-relaxed">{{ project.description }}</p>

                    <!-- Features -->
                    <div class="mb-6">
                      <h4 class="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul class="space-y-2">
                        @for (feature of project.features; track feature) {
                          <li class="flex items-start text-gray-400">
                            <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {{ feature }}
                          </li>
                        }
                      </ul>
                    </div>

                    <!-- Technologies -->
                    <div class="mb-6">
                      <h4 class="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of project.technologies; track tech) {
                          <span class="px-3 py-1 bg-slate-800 text-gray-300 text-sm rounded-full">{{ tech }}</span>
                        }
                      </div>
                    </div>

                    <!-- Impact -->
                    <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 class="text-lg font-semibold text-blue-400 mb-2">Impact</h4>
                      <p class="text-gray-300">{{ project.impact }}</p>
                    </div>
                  </div>

                  <!-- Visual Section -->
                  <div class="md:w-1/2 bg-slate-800 p-8 md:p-12 flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-24 h-24 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <span class="text-4xl">{{ project.icon }}</span>
                      </div>
                      <h4 class="text-xl font-bold text-white mb-2">{{ project.title }} Interface</h4>
                      <p class="text-gray-400">{{ project.subtitle }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <p class="text-gray-400 mb-6">Interested in working together?</p>
          <a href="#contact" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `
  ]
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 'planogram',
      title: 'Planogram System',
      subtitle: 'Canvas-Based Store Layout Designer',
      description: 'A sophisticated canvas-based system for designing and managing retail store layouts at scale. Built for Tango Eye\'s enterprise SaaS platform, handling thousands of stores with complex product placement rules and real-time compliance tracking.',
      features: [
        'Drag-and-drop fixture configuration',
        'Real-time compliance and placement tracking',
        'Zoom, pan, and dynamic positioning',
        'Multi-tenant architecture support'
      ],
      technologies: ['Angular', 'Fabric.js', 'Node.js', 'MongoDB', 'TypeScript'],
      impact: 'Handles store-level configurations at scale, processing thousands of stores with complex product placement rules and real-time operational insights.',
      icon: '??',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'swift-crm',
      title: 'Swift CRM',
      subtitle: 'Customizable Business CRM Platform',
      description: 'A lightweight, customizable CRM solution designed specifically for MSMEs. Completely rebuilt from Angular 11 to 17, featuring adaptive workflows that cater to different business models and industry requirements.',
      features: [
        'Industry-specific workflow templates',
        'Customizable lead conversion pipelines',
        'Integrated communication tools',
        'Affordable alternative to enterprise CRMs'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'GraphQL'],
      impact: 'Transformed how small businesses manage customer relationships, providing customizable workflows that adapt to different industry needs and business sizes.',
      icon: '??',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'zonebooks',
      title: 'ZoneBooks',
      subtitle: 'Accounting & Invoicing Software',
      description: 'A comprehensive accounting solution integrated with Swift CRM. Handles invoicing, expense tracking, financial reporting, and document management for small and medium businesses.',
      features: [
        'Automated invoice generation',
        'CRM integration for customer data',
        'PDF generation and document management',
        'Multi-currency support'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'PDF.js', 'TypeScript'],
      impact: 'Streamlined financial operations for businesses using Swift CRM, providing seamless integration between customer management and accounting workflows.',
      icon: '??',
      gradient: 'from-purple-500 to-pink-600'
    }
  ]);
}
