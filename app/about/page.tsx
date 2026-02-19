import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getMailtoLink } from '@/lib/contact';

export const metadata = {
  title: 'About Beacon | Beacon Digital Health',
  description: 'Learn about Beacon Digital Health and how we build practical intelligence modules for NHS teams.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="About Beacon"
        subtitle="Beacon builds practical intelligence modules for NHS digital and operational teams."
        description="We aim to improve patient flow by removing avoidable admin. Beacon fits the systems you already run and integrates into your existing architecture. Wherever possible, patient data stays in your environment by default."
        backButton={true}
        backHref="/"
      />

      {/* What Beacon is built on Section */}
      <section className="pt-10 md:pt-14 pb-12 md:pb-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-8">
            What Beacon is built on
          </h2>
          <p className="text-[15px] md:text-base text-slate-700 leading-relaxed max-w-[75ch] mb-10">
            Beacon is modular. Deploy one capability at a time, then scale what works.
          </p>
          <ul className="space-y-5 max-w-[78ch]">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">Built for NHS estates.</span>{" "}
                Works with Microsoft 365, Power Platform, Azure, and the tools teams already use.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">Local-first by default.</span>{" "}
                Keep patient data inside your tenant wherever possible.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">Audit-ready from day one.</span>{" "}
                Access, controls, and logs are built in.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">Integrates, doesn't replace.</span>{" "}
                Fits current workflows and systems with minimal disruption.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">Automation that removes friction.</span>{" "}
                Fewer handoffs, less re-keying, faster turnaround.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                <span className="font-medium text-slate-900">AI where it's safe and useful.</span>{" "}
                Clear boundaries, oversight, and escalation.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* How Beacon Works Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-12">How Beacon works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                  1
                </div>
              </div>
              <div className="max-w-[70ch]">
                <h3 className="font-semibold text-slate-950 mb-2">Find the bottleneck</h3>
                <p className="text-[15px] text-slate-700 leading-relaxed">Identify the workflow or decision point slowing teams down.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                  2
                </div>
              </div>
              <div className="max-w-[70ch]">
                <h3 className="font-semibold text-slate-950 mb-2">Ship a working capability</h3>
                <p className="text-[15px] text-slate-700 leading-relaxed">Integrate into your current setup and prove value in real use.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                  3
                </div>
              </div>
              <div className="max-w-[70ch]">
                <h3 className="font-semibold text-slate-950 mb-2">Measure and scale</h3>
                <p className="text-[15px] text-slate-700 leading-relaxed">Track impact, then roll out what works across services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local-first and audit-ready Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mt-10 mb-6">
            Local-first and audit-ready
          </h2>
          <p className="text-[15px] md:text-base text-slate-700 leading-relaxed max-w-[75ch] mb-8">
            Beacon is designed around NHS governance and day-to-day operations. Wherever possible we use local-first patterns, so patient data stays within your environment — within Trust, ICB, or local system boundaries.
          </p>
          <ul className="space-y-4 max-w-[75ch]">
            <li className="flex gap-3">
              <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-[15px] text-slate-700 leading-relaxed">Patient data stays local unless you choose otherwise</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-[15px] text-slate-700 leading-relaxed">Designed to meet governance and audit requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-[15px] text-slate-700 leading-relaxed">Works within your current stack — integrates into what you run today</span>
            </li>
          </ul>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[280px_1fr] items-start">
            {/* Left: Portrait */}
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-[280px] md:max-w-[320px]">
                <Image
                  src="/images/portrait-3.png"
                  alt="Izabela Holdsworth, Founder of Beacon Digital Health"
                  width={320}
                  height={400}
                  className="w-full aspect-[4/5] rounded-2xl object-cover object-center shadow-sm"
                  priority={false}
                />
              </div>
            </div>

            {/* Right: Founder Content */}
            <div className="order-1 lg:order-2 max-w-prose">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-2">
                  About the founder
                </h2>
                <p className="text-lg font-medium text-slate-600">
                  Izabela Holdsworth — Founder
                </p>
              </div>

              <p className="text-[15px] md:text-base text-slate-700 leading-relaxed mb-4">
                I built Beacon after 18 years working across NHS transformation, commissioning, and operational delivery — from contract and commercial management through to national programmes that improve pathways at scale.
              </p>

              <p className="text-[15px] md:text-base text-slate-700 leading-relaxed mb-4">
                Beacon exists because teams kept asking for the same thing: tools that fit how services actually run, integrate into the systems already in place, and meet governance requirements without slowing delivery down.
              </p>

              <p className="text-[15px] md:text-base text-slate-700 leading-relaxed mb-4">
                That experience shapes how Beacon is built: local-first patterns where patient data stays within your environment wherever possible, audit-ready controls by default, and practical modules that reduce admin burden and improve flow.
              </p>

              <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                Beacon is designed to be adopted quickly, governed properly, and scaled with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-50 border-t border-blue-200">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-2">
                Ready to explore what's possible?
              </h2>
              <p className="text-[15px] md:text-base text-slate-700">
                Request a demo to see how Beacon works with your data.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={getMailtoLink('Request a demo', 'Hi Izabela,\n\nI would like to request a demo of Beacon Digital Health.')}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Request a demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:bg-white transition-colors whitespace-nowrap"
              >
                View case studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
