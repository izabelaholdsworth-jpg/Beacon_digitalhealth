import { TrendingUp, Activity, CheckCircle2 } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface FeatureItem {
  text: string;
}

interface CardData {
  icon: React.ReactNode;
  iconBgColor: string;
  heading: string;
  subheading: string;
  description: string;
  features: FeatureItem[];
  gradientFrom: string;
  gradientTo: string;
}

const investmentCard: CardData = {
  icon: <TrendingUp size={40} />,
  iconBgColor: 'bg-cyan/15',
  heading: 'For Investment Funds',
  subheading: 'Precision Intelligence for Healthcare Deals',
  description:
    'Navigate the complex healthcare investment landscape with confidence. Our intelligence platforms provide real-time insights into NHS spending patterns, provider financial health, and market opportunities.',
  features: [
    { text: 'Market intelligence dashboards tracking NHS spending patterns' },
    { text: 'Healthcare provider financial health scoring' },
    { text: 'Deal pipeline tools identifying acquisition targets' },
    { text: 'Competitive landscape analysis and market positioning' },
  ],
  gradientFrom: 'from-navy/5',
  gradientTo: 'to-cyan/5',
};

const healthcareCard: CardData = {
  icon: <Activity size={40} />,
  iconBgColor: 'bg-cyan/15',
  heading: 'For Healthcare Organizations',
  subheading: 'AI-Powered Transformation at Every Level',
  description:
    'Transform your operations with AI-driven analytics and automation. From procurement optimization to patient engagement platforms, we deliver end-to-end solutions that drive measurable results.',
  features: [
    { text: 'Procurement analytics uncovering savings and fraud' },
    { text: 'Digital strategy and AI automation roadmaps' },
    { text: 'Patient platforms, chatbots, and engagement apps' },
    { text: 'End-to-end delivery: from pain points to deployment' },
  ],
  gradientFrom: 'from-navy/5',
  gradientTo: 'to-mint/10',
};

export default function ValueProposition() {
  return (
    <section id="services" className="w-full bg-white py-16 md:py-24 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 max-w-4xl mx-auto px-2">
            Intelligence That Drives Investment. Analytics That Transform
            Operations.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-grey max-w-3xl mx-auto px-2">
            Whether you&apos;re an investment fund evaluating healthcare
            opportunities or a healthcare organization seeking operational
            excellence, we deliver the intelligence and solutions you need to
            succeed.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Investment Funds Card */}
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-gray-200 hover:shadow-xl hover:border-cyan/30 transition-all duration-300 border-l-4 border-cyan">
              <div className="flex flex-col h-full min-h-0 md:min-h-[520px]">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`${investmentCard.iconBgColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-cyan`}>
                    {investmentCard.icon}
                  </div>
                </div>
                
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">{investmentCard.heading}</h3>
                
                {/* Subheading */}
                <h4 className="text-base md:text-lg font-semibold text-cyan mb-4">{investmentCard.subheading}</h4>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{investmentCard.description}</p>
                
                {/* Bullet points - flex-1 to fill space */}
                <div className="flex-1 space-y-3">
                  {investmentCard.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowingEffect>

          {/* Healthcare Organizations Card */}
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-gray-200 hover:shadow-xl hover:border-mint/30 transition-all duration-300 border-l-4 border-mint">
              <div className="flex flex-col h-full min-h-0 md:min-h-[520px]">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`${healthcareCard.iconBgColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-cyan`}>
                    {healthcareCard.icon}
                  </div>
                </div>
                
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">{healthcareCard.heading}</h3>
                
                {/* Subheading */}
                <h4 className="text-base md:text-lg font-semibold text-mint-dark mb-4">{healthcareCard.subheading}</h4>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{healthcareCard.description}</p>
                
                {/* Bullet points - flex-1 to fill space */}
                <div className="flex-1 space-y-3">
                  {healthcareCard.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowingEffect>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-navy max-w-3xl mx-auto">
            We don&apos;t just analyze data—we build solutions that transform how
            healthcare organizations operate and how investment funds make
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
