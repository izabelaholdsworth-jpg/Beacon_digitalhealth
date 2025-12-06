import {
  Search,
  GitBranch,
  Bot,
  BarChart3,
  Shield,
  Workflow,
  GraduationCap,
  Target,
} from 'lucide-react';

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  featured?: boolean;
  badge?: string;
}

const services: Service[] = [
  {
    title: 'NHS Procurement Forensics',
    icon: <Search size={40} className="text-cyan" />,
    description:
      'Deep-dive analysis of spending patterns, identifying savings opportunities and procurement inefficiencies across millions of transactions.',
    featured: true,
    badge: 'Core Service',
  },
  {
    title: 'Pathway Redesign & Optimization',
    icon: <GitBranch size={40} className="text-cyan" />,
    description:
      'Uncover bottlenecks and restructure patient workflows using data-driven evidence and predictive modeling.',
  },
  {
    title: 'AI Copilots & Automation Agents',
    icon: <Bot size={40} className="text-cyan" />,
    description:
      'Deploy intelligent automation that handles repetitive tasks, scheduling, reporting, and decision support—freeing clinical teams for patient care.',
    featured: true,
    badge: 'Popular',
  },
  {
    title: 'Market Intelligence Dashboards',
    icon: <BarChart3 size={40} className="text-cyan" />,
    description:
      'Real-time visibility into NHS market trends, competitor analysis, and strategic opportunities with Power BI and custom analytics.',
    featured: true,
    badge: 'Core Service',
  },
  {
    title: 'Fraud Detection & Financial Analytics',
    icon: <Shield size={40} className="text-cyan" />,
    description:
      'Sophisticated pattern recognition identifying anomalies, duplicate payments, and financial risks before they escalate.',
  },
  {
    title: 'Bespoke Automation Builds',
    icon: <Workflow size={40} className="text-cyan" />,
    description:
      'Custom n8n workflows, Python solutions, and integrated systems tailored to your organization\'s exact needs—no cookie-cutter approaches.',
  },
  {
    title: 'Training & Capability Uplift',
    icon: <GraduationCap size={40} className="text-cyan" />,
    description:
      'Empower your teams with the skills to maintain and evolve solutions—so you\'re never dependent on consultants.',
  },
  {
    title: 'Strategic Automation Roadmaps',
    icon: <Target size={40} className="text-cyan" />,
    description:
      'Define ROI, prioritize quick wins, and build scalable automation strategies aligned with your organizational goals.',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1729] mb-3 md:mb-4">
            What We Do Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A5568] max-w-2xl mx-auto px-2">
            Automation and analytics that deliver real results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} rounded-xl shadow-md border-2 border-gray-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300`}
            >
              {service.badge && (
                <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {service.badge}
                </span>
              )}
              <div className="bg-cyan/15 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 ring-1 ring-cyan/20 group-hover:bg-cyan/25 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}