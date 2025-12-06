import { Target, TrendingUp, Zap, Code2, Quote } from 'lucide-react';

interface ValueCard {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  description: string;
  borderColor: string;
}

const valueCards: ValueCard[] = [
  {
    title: 'Proven NHS Track Record',
    icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
    iconBgColor: 'bg-cyan/15',
    iconTextColor: 'text-cyan',
    description:
      '17 years transforming NHS operations. Complex AI automation and forensic analytics deployed across national programmes—from fraud detection to pathway optimization.',
    borderColor: 'border-cyan',
  },
  {
    title: 'Results That Count',
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
    iconBgColor: 'bg-cyan/15',
    iconTextColor: 'text-cyan',
    description:
      '£14.56 billion analyzed. 5.2 million transactions processed. Real savings delivered, inefficiencies eliminated, and digital solutions implemented at scale.',
    borderColor: 'border-cyan',
  },
  {
    title: 'Boutique Agility, Enterprise Quality',
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
    iconBgColor: 'bg-cyan/15',
    iconTextColor: 'text-cyan',
    description:
      'Hands-on expertise with rapid delivery—no corporate bureaucracy, just results. Senior-level attention on every engagement.',
    borderColor: 'border-cyan',
  },
  {
    title: 'Technical Excellence',
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
    iconBgColor: 'bg-cyan/15',
    iconTextColor: 'text-cyan',
    description:
      'From Python and Power BI to n8n automation and AI integration—we build sophisticated solutions that work in the real world, not just slides.',
    borderColor: 'border-cyan',
  },
];

export default function WhyBeacon() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Beacon Analytics?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-grey max-w-3xl mx-auto px-2">
            We don&apos;t just consult—we build AI-powered systems that transform
            NHS operations and deliver measurable impact.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-100 border-t-4 ${card.borderColor} rounded-xl shadow-md p-6 md:p-8 hover:shadow-xl hover:border-cyan/30 transition-all duration-300`}
            >
              <div
                className={`${card.iconBgColor} ${card.iconTextColor} w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy mb-4">{card.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-navy/5 via-cyan/5 to-mint/5 border-l-4 border-cyan py-8 px-10 rounded-xl shadow-sm">
            {/* Large decorative quote icon */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-cyan opacity-10" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic text-navy leading-relaxed mb-4">
                &ldquo;We build high-impact automation that frees time, reduces costs,
                and unlocks growth.&rdquo;
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold text-right">
                &mdash; Beacon Analytics Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
