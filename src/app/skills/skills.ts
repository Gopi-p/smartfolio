import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  description: string;
  technologies: string[];
  icon: string;
  color: string;
  gradient: string;
}

interface Tool {
  name: string;
  category: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="py-24 bg-slate-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span class="text-blue-400">Skills</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            My expertise spans frontend development, backend architecture, and modern development tools.
            Here's what I work with every day.
          </p>
        </div>

        <div class="mb-16">
          <h3 class="text-2xl font-bold text-white text-center mb-12">Core Technologies</h3>
          <div class="grid md:grid-cols-2 gap-8">
            @for (skill of coreSkills(); track skill.name) {
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-xl">{{ skill.icon }}</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white">{{ skill.name }}</h4>
                    <span class="text-sm text-blue-400">{{ skill.level }}</span>
                  </div>
                </div>

                <p class="text-gray-400 mb-4">{{ skill.description }}</p>

                <div class="mb-4">
                  <h5 class="text-sm font-medium text-white mb-2">Key Technologies</h5>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of skill.technologies; track tech) {
                      <span class="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded">{{ tech }}</span>
                    }
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm text-gray-400">Proficiency</span>
                    <span class="text-sm text-blue-400 font-medium">{{ getProficiencyPercentage(skill.level) }}%</span>
                  </div>
                  <div class="w-full bg-slate-800 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full transition-all duration-1000" [style.width.%]="getProficiencyPercentage(skill.level)"></div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="mb-16">
          <h3 class="text-2xl font-bold text-white text-center mb-12">Tools & Platforms</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            @for (tool of tools(); track tool.name) {
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors duration-300">
                <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span class="text-xl">{{ tool.icon }}</span>
                </div>
                <h4 class="text-sm font-medium text-white">{{ tool.name }}</h4>
                <p class="text-xs text-gray-400 mt-1">{{ tool.category }}</p>
              </div>
            }
          </div>
        </div>

        <div class="mb-16">
          <h3 class="text-2xl font-bold text-white text-center mb-12">Additional Expertise</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            @for (expertise of additionalExpertise(); track expertise) {
              <div class="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors duration-300">
                <svg class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300 text-sm">{{ expertise }}</span>
              </div>
            }
          </div>
        </div>

        <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
          <h3 class="text-2xl font-bold text-white text-center mb-8">Skill Overview</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400">Angular</div>
              <div class="text-sm text-gray-400">95%</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400">TypeScript</div>
              <div class="text-sm text-gray-400">95%</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400">Node.js</div>
              <div class="text-sm text-gray-400">85%</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400">MongoDB</div>
              <div class="text-sm text-gray-400">85%</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400">ME</div>
              <div class="text-sm text-gray-400">100%</div>
            </div>
          </div>
          <p class="text-gray-400 text-center">
            My technical expertise forms a well-rounded foundation across the modern web development stack,
            with deep specialization in Angular and TypeScript ecosystems.
          </p>
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

      .shadow-3xl {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }
    `
  ]
})
export class SkillsComponent {
  coreSkills = signal<Skill[]>([
    {
      name: 'Angular',
      level: 'Expert',
      description: 'Complex UI development, performance optimization, state management, and modern Angular patterns including signals, standalone components, and SSR.',
      technologies: ['RxJS', 'Signals', 'SSR', 'Standalone Components', 'Angular Material'],
      icon: '???',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      description: 'Type-safe development, advanced types, generics, and modern JavaScript patterns with comprehensive type definitions.',
      technologies: ['Advanced Types', 'Generics', 'Decorators', 'Utility Types', 'Mapped Types'],
      icon: '??',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Node.js',
      level: 'Advanced',
      description: 'Backend API development, server-side rendering, and scalable application architecture with Express and modern Node.js patterns.',
      technologies: ['Express', 'SSR', 'APIs', 'Microservices', 'REST/GraphQL'],
      icon: '??',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'MongoDB',
      level: 'Advanced',
      description: 'NoSQL database design, schema modeling, aggregation pipelines, and performance optimization for scalable applications.',
      technologies: ['Aggregation', 'Indexing', 'Schema Design', 'Atlas', 'Compass'],
      icon: '??',
      color: 'green',
      gradient: 'from-green-600 to-emerald-600'
    }
  ]);

  tools = signal<Tool[]>([
    { name: 'AWS', category: 'Cloud Services', icon: '??', color: 'from-orange-400 to-orange-500' },
    { name: 'Docker', category: 'Containerization', icon: '??', color: 'from-blue-400 to-blue-500' },
    { name: 'Git', category: 'Version Control', icon: '??', color: 'from-gray-600 to-gray-700' },
    { name: 'Firebase', category: 'Backend Services', icon: '??', color: 'from-orange-500 to-red-500' },
    { name: 'GraphQL', category: 'API Design', icon: '??', color: 'from-pink-500 to-pink-600' },
    { name: 'Flutter', category: 'Cross-platform', icon: '??', color: 'from-blue-400 to-cyan-500' }
  ]);

  additionalExpertise = signal<string[]>([
    'SQL Databases',
    'REST APIs',
    'Unit Testing',
    'Agile Methodologies',
    'CI/CD Pipelines',
    'Performance Optimization'
  ]);

  getProficiencyPercentage(level: string): number {
    switch (level) {
      case 'Expert': return 95;
      case 'Advanced': return 85;
      case 'Intermediate': return 75;
      default: return 70;
    }
  }
}
