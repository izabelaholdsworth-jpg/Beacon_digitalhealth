import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getCapability, getAllCapabilitySlugs, caseStudiesData } from '@/app/capabilities/capabilitiesData';
import { getMailtoLink } from '@/lib/contact';
import DashboardPreview from '@/components/marketing/DashboardPreview';

export async function generateStaticParams() {
  return getAllCapabilitySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = getCapability(slug);

  if (!capability) {
    return {};
  }

  return {
    title: `${capability.title} | Beacon Digital Health`,
    description: capability.overview,
  };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = getCapability(slug);

  if (!capability) {
    notFound();
  }

  // Get related case studies
  const relatedCases = capability.relatedCaseSlugs
    .map((caseSlug) => caseStudiesData.find((c) => c.slug === caseSlug))
    .filter((c): c is typeof caseStudiesData[0] => Boolean(c));

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={capability.title}
        subtitle={capability.subtitle}
        description="A deployable capability. Delivered through dashboards, workflows, and documented methods."
        backButton={true}
        backHref="/capabilities"
        variant="subpage"
      />

      {/* White Content Section */}
      <div className="bg-white text-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <p className="text-base leading-relaxed text-slate-700">{capability.overview}</p>
          </section>

          {/* What You Get */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What you get</h2>
            <ul className="space-y-3">
              {capability.whatYouGet.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                    ✓
                  </span>
                  <span className="text-base text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How it works</h2>
            <ol className="space-y-4">
              {capability.howItWorks.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-base text-slate-700 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Typical Outputs */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Typical outputs</h2>
            <ul className="space-y-3">
              {capability.typicalOutputs.map((output, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700 leading-relaxed">{output}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Dashboard Preview (Forensics only) */}
          {slug === 'forensics' && (
            <section>
              <DashboardPreview
                imageSrc="/images/forensic-dashboard.png"
                imageAlt="Forensic expenditure analysis dashboard preview"
                caseStudySlug="expenditure-forensics"
              />
            </section>
          )}

          {/* Best For */}
          <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">Best for</h3>
            <p className="text-base text-slate-800">{capability.bestFor}</p>
          </section>

          {/* Related Case Studies */}
          {relatedCases.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Related case studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedCases.map((caseStudy, idx) => (
                  <Link
                    key={caseStudy.slug}
                    href={`/case-studies/${caseStudy.slug}`}
                    className="group border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 animate-card-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{caseStudy.lede}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <p className="text-base text-slate-800 mb-6">{capability.ctaLine}</p>
            <a
              href={getMailtoLink('Capability demo request', `I\'d like to learn more about ${capability.title}.`)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
