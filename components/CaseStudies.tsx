import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    headline: "Expenditure forensic analysis",
    context: "NHS spend control and assurance",
    impact: [
      "£139.62M non-PO spend surfaced as control/recovery opportunity",
      "£71.5M credit notes flagged for investigation",
      "51k micro-invoices identified as admin burden"
    ],
    cta: "Read case study",
    link: "/case-studies/expenditure-forensics"
  },
  {
    headline: "Patient flow optimisation",
    context: "Triage and pathway coordination",
    impact: [
      "Reduction in no-shows through automated triage",
      "Pathway coordination reducing variation across services",
      "Operational efficiency gains through orchestrated flow"
    ],
    cta: "Read case study",
    link: "/case-studies/patient-engagement-modules"
  },
  {
    headline: "Healthcare deal sourcing capability",
    context: "Private equity target identification",
    impact: [
      "40+ potential targets identified in 6 weeks",
      "Automated due diligence scoring",
      "£2M+ pipeline opportunity value identified"
    ],
    cta: "Read case study",
    link: "/case-studies/deal-sourcing-intelligence"
  }
];

export default function CaseStudies() {
  return (
    <section id="impact" className="py-24 bg-white border-t border-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Proven Impact
          </h2>
          <p className="text-lg text-slate-600">
            Case studies and recent engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative border border-slate-200 bg-white rounded-lg p-8 flex flex-col h-full shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {item.headline}
              </h3>
              <p className="text-slate-600 font-medium mb-6 text-base border-b border-slate-100 pb-4">
                {item.context}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {item.impact.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 group-hover:text-primary transition-colors mt-auto">
                {item.cta} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
