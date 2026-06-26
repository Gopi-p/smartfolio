import { Component, signal } from '@angular/core';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'achievement';
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 bg-slate-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span class="text-blue-400">Me</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            5 years of building scalable SaaS applications — from Angular developer to Team Lead,
            architecting complex frontend systems and end-to-end product features.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800"></div>

          <!-- Timeline items -->
          <div class="space-y-12">
            <!-- Current Role -->
            <div class="relative flex items-center justify-between">
              <div class="w-full md:w-5/12 md:pr-8 text-right">
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                  <div class="flex items-center justify-end mb-3">
                    <span class="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Software Engineer</h3>
                  <p class="text-blue-400 font-medium mb-3">Tango Eye, Chennai</p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Architected a canvas-based store layout system from scratch with Angular and Fabric.js,
                    enabling drag-and-drop configuration of fixtures and product placements across thousands
                    of retail locations. Designed planogram backend APIs and improved frontend performance
                    with OnPush, signals, standalone components, lazy loading, and modular architecture.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4 justify-end">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Fabric.js</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Signals</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Node.js</span>
                  </div>
                </div>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <div class="w-full md:w-5/12 md:pl-8"></div>
            </div>

            <!-- Team Lead Role -->
            <div class="relative flex items-center justify-between">
              <div class="w-full md:w-5/12 md:pr-8"></div>

              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <div class="w-full md:w-5/12 md:pl-8">
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                  <div class="flex items-center justify-start mb-3">
                    <span class="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">2023-2025</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Team Lead / Software Engineer</h3>
                  <p class="text-blue-400 font-medium mb-3">Tandemloop Technologies, Bangalore</p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Led a team of 7 engineers to redesign and rebuild a SaaS platform from scratch.
                    Drove architectural decisions across frontend and backend, including REST-to-GraphQL
                    migration and multi-tenant architecture. Established coding standards, ran code
                    reviews, and managed end-to-end delivery with design, QA, and DevOps.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">GraphQL</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Multi-tenant</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Software Engineer Role -->
            <div class="relative flex items-center justify-between">
              <div class="w-full md:w-5/12 md:pr-8 text-right">
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                  <div class="flex items-center justify-end mb-3">
                    <span class="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">2021-2023</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Software Engineer</h3>
                  <p class="text-blue-400 font-medium mb-3">Tandemloop Technologies, Bangalore</p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Revamped a legacy Angular app by rewriting from Angular 11 to 17 using modern
                    architecture patterns and standalone components. Built core modules: authentication,
                    organization management, role-based access control, and order fulfilment workflows.
                    Restructured frontend architecture and reduced bundle size.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4 justify-end">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular 11 → 17</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">RBAC</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Performance</span>
                  </div>
                </div>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <div class="w-full md:w-5/12 md:pl-8"></div>
            </div>

            <!-- Education -->
            <div class="relative flex items-center justify-between">
              <div class="w-full md:w-5/12 md:pr-8"></div>

              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <div class="w-full md:w-5/12 md:pl-8">
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                  <div class="flex items-center justify-start mb-3">
                    <span class="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">MCA (Master of Computer Applications)</h3>
                  <p class="text-blue-400 font-medium mb-3">University of Madras</p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Advanced studies in computer applications, focusing on software engineering principles, system design, and modern development practices.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Software Engineering</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">System Design</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Databases</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Architecture</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bachelor's Degree -->
            <div class="relative flex items-center justify-between">
              <div class="w-full md:w-5/12 md:pr-8 text-right">
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                  <div class="flex items-center justify-end mb-3">
                    <span class="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">2021</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">B.Sc Physics & Computer Science</h3>
                  <p class="text-blue-400 font-medium mb-3">SASTRA University</p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Foundation in physics and computer science, sparking interest in both scientific problem-solving and software development.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4 justify-end">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Physics</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Computer Science</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Mathematics</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Programming</span>
                  </div>
                </div>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <div class="w-full md:w-5/12 md:pl-8"></div>
            </div>
          </div>
        </div>

        <!-- What I enjoy working on -->
        <div class="mt-20">
          <h3 class="text-3xl font-bold text-white text-center mb-12">
            What I <span class="text-blue-400">Enjoy Working On</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (interest of interests(); track interest.title) {
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                <div class="text-3xl mb-4">{{ interest.icon }}</div>
                <h4 class="text-lg font-semibold text-white mb-2">{{ interest.title }}</h4>
                <p class="text-gray-400 text-sm leading-relaxed">{{ interest.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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

    /* Timeline animations */
    .timeline-item {
      animation: slideIn 0.8s ease-out forwards;
      opacity: 0;
    }

    .timeline-item:nth-child(odd) {
      animation-delay: 0.2s;
    }

    .timeline-item:nth-child(even) {
      animation-delay: 0.4s;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Hover effects */
    .group:hover .group-hover\\:scale-105 {
      transform: scale(1.05);
    }

    .group:hover .group-hover\\:-translate-y-1 {
      transform: translateY(-4px);
    }

    .group:hover .group-hover\\:-translate-y-2 {
      transform: translateY(-8px);
    }

    /* Custom scrollbar for timeline */
    .timeline-container::-webkit-scrollbar {
      width: 6px;
    }

    .timeline-container::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .timeline-container::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
      border-radius: 3px;
    }

    .timeline-container::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #2563eb, #7c3aed);
    }
  `]
})
export class AboutComponent {
  timelineItems = signal<TimelineItem[]>([
    {
      year: '2025',
      title: 'Software Engineer',
      company: 'Tango Eye, Chennai',
      description: 'Architected a canvas-based store layout system with Angular and Fabric.js for fixture and product placement across thousands of retail locations. Designed planogram backend APIs and improved frontend performance with OnPush, signals, standalone components, and modular architecture.',
      technologies: ['Angular', 'Fabric.js', 'Signals', 'Node.js'],
      type: 'work',
      icon: '💼'
    },
    {
      year: '2023-2025',
      title: 'Team Lead / Software Engineer',
      company: 'Tandemloop Technologies, Bangalore',
      description: 'Led a team of 7 engineers across frontend, backend, and QA. Drove migration from REST to GraphQL, implemented multi-tenant architecture, and established coding standards. Managed sprint planning, technical interviews, and cross-team coordination.',
      technologies: ['Angular', 'GraphQL', 'Node.js', 'Leadership'],
      type: 'work',
      icon: '👥'
    },
    {
      year: '2021-2023',
      title: 'Software Engineer',
      company: 'Tandemloop Technologies, Bangalore',
      description: 'Started as Angular developer, contributed to building core SaaS modules. Led Angular 11 to 17 migration, built authentication systems, RBAC, and order fulfillment workflows. Improved performance and reduced bundle size.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Performance'],
      type: 'work',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'MCA (Master of Computer Applications)',
      company: 'University of Madras',
      description: 'Advanced studies in computer applications, focusing on software engineering principles, system design, and modern development practices.',
      technologies: ['Software Engineering', 'System Design', 'Databases', 'Architecture'],
      type: 'education',
      icon: '🎓'
    },
    {
      year: '2021',
      title: 'B.Sc Physics & Computer Science',
      company: 'SASTRA University',
      description: 'Foundation in physics and computer science, sparking interest in both scientific problem-solving and software development.',
      technologies: ['Physics', 'Computer Science', 'Mathematics', 'Programming'],
      type: 'education',
      icon: '📚'
    }
  ]);

  interests = signal([
    {
      icon: '🖥️',
      title: 'Complex UI Systems',
      description: 'Canvas-based interfaces, dynamic layouts, and state-heavy applications with smooth interactions.'
    },
    {
      icon: '⚡',
      title: 'Performance & Scalability',
      description: 'Optimizing rendering paths, bundle size, and data flow patterns for large-scale SaaS workloads.'
    },
    {
      icon: '🏗️',
      title: 'System-Level Thinking',
      description: 'API design, schema modeling, and end-to-end architecture decisions across frontend and backend.'
    },
    {
      icon: '🚀',
      title: 'End-to-End Product Work',
      description: 'Owning features from problem framing through delivery — from data model to deployed UI.'
    }
  ]);
}