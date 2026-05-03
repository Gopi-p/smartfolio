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
            My journey from Angular developer to Team Lead, building scalable SaaS applications and complex frontend systems.
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
                    Leading frontend development on a large-scale enterprise SaaS application for retail store management.
                    Building canvas-based store layout systems with complex UI interactions, real-time data integration, and performance optimization at scale.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4 justify-end">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Canvas API</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">RxJS</span>
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
                    Led a team of 7 engineers across frontend, backend, and QA. Drove migration from REST to GraphQL,
                    implemented multi-tenant architecture, and established coding standards. Managed sprint planning, technical interviews, and cross-team coordination.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">GraphQL</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Node.js</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Leadership</span>
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
                    Started as Angular developer, contributed to building core SaaS modules. Led Angular 11 to 17 migration,
                    built authentication systems, RBAC, and order fulfillment workflows. Improved performance and reduced bundle size.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4 justify-end">
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">Angular</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                    <span class="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">RxJS</span>
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

        <!-- Skills overview -->
        <div class="mt-20 text-center">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
            What I <span class="text-purple-600 dark:text-purple-400">Enjoy Working On</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (skill of skills(); track skill.title) {
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                <div class="text-4xl mb-4 group-hover:animate-bounce">{{ skill.icon }}</div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ skill.title }}</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ skill.description }}</p>
              </div>
            }
          </div>
        </div>

        <!-- Fun facts section -->
        <div class="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 class="text-3xl font-bold mb-8">Fun Facts</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group cursor-pointer" (click)="toggleFunFact(0)">
              <div class="text-4xl mb-4 group-hover:animate-spin">🚀</div>
              <h4 class="text-xl font-semibold mb-2">Problem Solver</h4>
              <p class="opacity-90" [class.hidden]="!funFactsVisible()[0]">
                I love tackling complex challenges and finding elegant solutions that make a real impact.
              </p>
            </div>
            <div class="group cursor-pointer" (click)="toggleFunFact(1)">
              <div class="text-4xl mb-4 group-hover:animate-bounce">🎨</div>
              <h4 class="text-xl font-semibold mb-2">Creative Thinker</h4>
              <p class="opacity-90" [class.hidden]="!funFactsVisible()[1]">
                I believe great software is both functional and beautiful, combining technical excellence with thoughtful design.
              </p>
            </div>
            <div class="group cursor-pointer" (click)="toggleFunFact(2)">
              <div class="text-4xl mb-4 group-hover:animate-pulse">🌱</div>
              <h4 class="text-xl font-semibold mb-2">Continuous Learner</h4>
              <p class="opacity-90" [class.hidden]="!funFactsVisible()[2]">
                Technology evolves rapidly, and I'm always excited to learn new tools and approaches to stay ahead.
              </p>
            </div>
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
  funFactsVisible = signal([false, false, false]);

  timelineItems = signal<TimelineItem[]>([
    {
      year: '2025',
      title: 'Software Engineer',
      company: 'Tango Eye, Chennai',
      description: 'Leading frontend development on a large-scale enterprise SaaS application for retail store management. Building canvas-based store layout systems with complex UI interactions, real-time data integration, and performance optimization at scale.',
      technologies: ['Angular', 'Canvas API', 'TypeScript', 'RxJS'],
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

  skills = signal([
    {
      icon: '🖥️',
      title: 'Complex UI Systems',
      description: 'Building canvas-based interfaces, dynamic layouts, and state-heavy applications with smooth user interactions.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Scaling applications to handle thousands of users, optimizing bundle sizes, and implementing efficient data flow patterns.'
    },
    {
      icon: '🏗️',
      title: 'System-Level Thinking',
      description: 'Designing end-to-end product architectures, API schemas, database modeling, and scalable backend solutions.'
    },
    {
      icon: '👨‍💼',
      title: 'Team Leadership',
      description: 'Leading engineering teams, mentoring developers, and driving technical excellence across organizations.'
    },
    {
      icon: '🔄',
      title: 'Migration & Modernization',
      description: 'Successfully migrating legacy systems to modern frameworks and establishing scalable development practices.'
    },
    {
      icon: '🎯',
      title: 'Problem Solving',
      description: 'Breaking down complex business challenges into elegant technical solutions that deliver real value.'
    }
  ]);

  toggleFunFact(index: number) {
    const current = this.funFactsVisible();
    current[index] = !current[index];
    this.funFactsVisible.set([...current]);
  }
}