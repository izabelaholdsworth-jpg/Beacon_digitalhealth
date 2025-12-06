import {
  BarChart3,
  Smartphone,
  Shield,
  Activity,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ImpactItem {
  text: string;
}

interface SolutionItem {
  text: string;
}

interface FeaturedCaseStudy {
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  title: string;
  challenge: string;
  solution: string | SolutionItem[];
  impact: ImpactItem[];
  gradientFrom: string;
  gradientTo: string;
}

interface SmallCaseStudy {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    icon: <BarChart3 size={48} />,
    tag: 'Investment Intelligence',
    tagColor: 'text-cyan',
    title: 'Healthcare Deal Sourcing Platform',
    challenge:
      'UK-based private equity fund needed systematic approach to identifying acquisition targets across fragmented NHS provider market.',
    solution:
      'Built AI-powered deal sourcing tool analyzing £14.56B in NHS transactions across 5.2M records, scoring provider financial health, growth trajectories, and market positioning.',
    impact: [
      { text: '40+ potential targets identified in 6 weeks' },
      { text: 'Automated due diligence scoring system' },
      { text: 'Real-time market intelligence dashboard' },
      { text: '£2M+ pipeline opportunity value identified' },
    ],
    gradientFrom: 'from-navy',
    gradientTo: 'to-cyan',
  },
  {
    icon: <Smartphone size={48} />,
    tag: 'Digital Transformation',
    tagColor: 'text-navy',
    title: 'Talking Therapies Patient Engagement Platform',
    challenge:
      'NHS Mental Health Trust struggling with appointment no-shows, manual triage processes, and limited patient engagement between sessions.',
    solution: [
      { text: 'AI chatbot for 24/7 triage and appointment scheduling' },
      { text: 'Patient mobile app with therapy resources and progress tracking' },
      { text: 'Automated SMS reminders and engagement workflows' },
      { text: 'Integration with existing EPR systems' },
    ],
    impact: [
      { text: '35% reduction in appointment no-shows' },
      { text: '60% decrease in admin time for booking/triage' },
      { text: '4.8/5 patient satisfaction rating' },
      { text: 'Scaled across 3 additional services within 6 months' },
    ],
    gradientFrom: 'from-navy',
    gradientTo: 'to-mint',
  },
];

const smallCaseStudies: SmallCaseStudy[] = [
  {
    icon: <Shield size={24} />,
    iconColor: 'text-cyan',
    title: 'NHS Procurement Forensics: Uncovering £850K in Duplicate Payments',
    description:
      'Forensic analysis of trust spending identifying overpayments, contract anomalies, and procurement inefficiencies.',
  },
  {
    icon: <Activity size={24} />,
    iconColor: 'text-mint-dark',
    title: 'Pathway Redesign: 40% Reduction in Patient Wait Times',
    description:
      'Data-driven workflow optimization and predictive capacity modeling for elective care pathways.',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full bg-white py-16 md:py-24 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Proven Impact Across Healthcare
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            Real projects. Real results.
          </p>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredCaseStudies.map((study, index) => {
            const isLeftCard = index === 0;
            const badgeBgColor = isLeftCard ? 'bg-cyan' : 'bg-mint/90';
            const badgeTextColor = isLeftCard ? 'text-white' : 'text-navy';
            const borderTopColor = isLeftCard ? 'border-cyan' : 'border-mint';
            const sectionLabelColor = isLeftCard ? 'text-cyan' : 'text-navy';
            const bulletColor = isLeftCard ? 'text-cyan/60' : 'text-mint/60';
            const ctaBgColor = isLeftCard ? 'bg-cyan/10 text-cyan hover:bg-cyan hover:text-white' : 'bg-mint/10 text-navy hover:bg-mint/80 hover:text-white';

            return (
              <GlowingEffect key={index} spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="relative">
                <div className={`bg-white rounded-xl shadow-lg border-2 border-gray-200 border-t-4 ${borderTopColor} p-6 md:p-8 hover:shadow-xl hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex flex-col h-full min-h-0 md:min-h-[650px]">
                    {/* Badge */}
                    <span className={`px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-semibold ${badgeBgColor} ${badgeTextColor} rounded-full inline-block mb-4 shadow-sm`}>
                      {study.tag}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-navy mb-6">
                      {study.title}
                    </h3>

                    {/* Content Area */}
                    <div className="flex-1 space-y-6">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className={`w-4 h-4 ${sectionLabelColor}`} />
                          <span className={`font-bold text-xs md:text-sm uppercase tracking-wide ${sectionLabelColor}`}>Challenge</span>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className={`w-4 h-4 ${sectionLabelColor}`} />
                          <span className={`font-bold text-xs md:text-sm uppercase tracking-wide ${sectionLabelColor}`}>Solution</span>
                        </div>
                        {typeof study.solution === 'string' ? (
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{study.solution}</p>
                        ) : (
                          <ul className="space-y-2">
                            {study.solution.map((item, idx) => (
                              <li key={idx} className="text-xs sm:text-sm md:text-base text-gray-600 flex items-start gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${bulletColor} flex-shrink-0 mt-0.5`} />
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Impact */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className={`w-4 h-4 ${sectionLabelColor}`} />
                          <span className={`font-bold text-xs md:text-sm uppercase tracking-wide ${sectionLabelColor}`}>Impact</span>
                        </div>
                        <ul className="space-y-2">
                          {study.impact.map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm md:text-base text-gray-600 flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 ${bulletColor} flex-shrink-0 mt-0.5`} />
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Button at Bottom */}
                    <div className="mt-auto pt-6">
                      <a
                        href="#"
                        className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg font-semibold transition-all duration-300 ${ctaBgColor}`}
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </GlowingEffect>
            );
          })}
        </div>

        {/* Smaller Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {smallCaseStudies.map((study, index) => {
            const isLeftCard = index === 0;
            const iconColor = isLeftCard ? 'text-cyan' : 'text-mint-dark';
            const iconBgColor = isLeftCard ? 'bg-cyan/15' : 'bg-mint/15';
            const borderTopColor = isLeftCard ? 'border-cyan' : 'border-mint';
            const ctaBgColor = isLeftCard ? 'bg-cyan/10 text-cyan hover:bg-cyan hover:text-white' : 'bg-mint/10 text-navy hover:bg-mint/80 hover:text-white';

            return (
              <GlowingEffect key={index} spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="relative">
                <div className={`bg-white rounded-xl shadow-lg border-2 border-gray-200 border-t-4 ${borderTopColor} p-6 md:p-8 hover:shadow-xl hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex flex-col h-full min-h-0 md:min-h-[240px]">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center mb-4`}>
                      <div className={`${iconColor} w-6 h-6`}>{study.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-3">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Button at Bottom */}
                    <div className="mt-auto pt-4">
                      <a
                        href="#"
                        className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm rounded-lg font-semibold transition-all duration-300 ${ctaBgColor}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </GlowingEffect>
            );
          })}
        </div>
      </div>
    </section>
  );
}
