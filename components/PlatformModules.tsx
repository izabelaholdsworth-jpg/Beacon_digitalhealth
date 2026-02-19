'use client';

import Link from 'next/link';
import { ShieldAlert, FileText, Bot, Activity, LineChart, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const coreModules = [
    {
        icon: ShieldAlert,
        title: "Forensics",
        slug: "forensics",
        subtitle: "Detect financial risk before it escalates",
        metrics: [
            "Leakage and duplicate spend",
            "Control failures",
            "Recovery prioritisation"
        ],
    },
    {
        icon: FileText,
        title: "Contracts",
        slug: "contracts",
        subtitle: "Visibility across your commercial estate",
        metrics: [
            "Expiries and renewals",
            "Spend benchmarking",
            "Off-contract detection"
        ],
    },
    {
        icon: Bot,
        title: "Statutory Response",
        slug: "statutory-response",
        subtitle: "Audit-ready statutory response automation",
        metrics: [
            "Workflow automation",
            "Defensible records",
            "Faster turnaround"
        ],
    },
    {
        icon: Activity,
        title: "Patient Flow",
        slug: "patient-flow",
        subtitle: "Triage and pathway orchestration",
        metrics: [
            "Triage automation",
            "Pathway coordination",
            "Reduced variation"
        ],
    }
];

const specialistModules = [
    {
        icon: LineChart,
        title: "Intelligence",
        slug: "intelligence",
        subtitle: "Early-warning signals for system performance",
        metrics: [
            "Variation detection",
            "Demand signals",
            "Cost pressure"
        ],
    },
    {
        icon: Layers,
        title: "Service Design",
        slug: "service-design",
        subtitle: "Scalable care models and operating design",
        metrics: [
            "Pathway design",
            "Workforce model",
            "Governance"
        ],
    }
];

// Reusable Card Component with premium animations
const CapabilityCard = ({ module, index, slug }: { module: typeof coreModules[0]; index: number; slug: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.08,
      },
    },
  };

  const cardHoverVariants = {
    rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
    hover: { y: -2, boxShadow: '0 8px 16px rgba(0,0,0,0.12)' },
  };

  return (
    <Link href={`/capabilities/${slug}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="group relative border border-slate-200 bg-white rounded-lg p-8 flex flex-col h-full shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 cursor-pointer">
            {/* Icon Container */}
            <motion.div
              className="mb-5 w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 group-hover:border-sky-400/50 transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              <module.icon className="w-5 h-5 text-sky-600" strokeWidth={1.5} />
            </motion.div>

            {/* Title & Subtitle */}
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors duration-300">
              {module.title}
            </h3>
            <p className="text-[15px] text-slate-600 mb-4 line-clamp-2 leading-relaxed">
              {module.subtitle}
            </p>

            {/* Metrics (Bullets) */}
            {module.metrics.length > 0 && (
              <div className="space-y-2 mb-4 flex-grow">
                {module.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="w-1 h-1 bg-sky-500 rounded-full flex-shrink-0 mt-1.5"></div>
                    <span className="leading-relaxed">{metric}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Learn More Link - Fade in on hover */}
            <motion.div
              className="pt-4 border-t border-slate-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function PlatformModules() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">Core capabilities</h2>
                    <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
                        Modular capabilities that unify data, automate workflows, and surface operational risk across digital health systems.
                    </p>
                </div>

                {/* Core Modules Grid - 4 cols desktop, 2 cols tablet, 1 col mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {coreModules.map((module, index) => (
                        <CapabilityCard key={index} module={module} index={index} slug={module.slug} />
                    ))}
                </div>

                {/* Specialist Capabilities Divider - Visually secondary */}
                <div className="mb-8">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Specialist capabilities</p>
                </div>

                {/* Specialist Modules Grid - 2 cols, less prominent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specialistModules.map((module, index) => (
                        <CapabilityCard key={index} module={module} index={coreModules.length + index} slug={module.slug} />
                    ))}
                </div>
            </div>
        </section>
    );
}
