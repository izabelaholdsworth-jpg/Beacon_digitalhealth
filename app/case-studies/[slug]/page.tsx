import { notFound } from 'next/navigation';
import { caseStudies } from '../caseStudiesData';
import { getMailtoLink } from '@/lib/contact';
import CaseStudyLayout from '@/components/case-studies/case-study-layout';
import DashboardFramePreview from '@/components/marketing/DashboardFramePreview';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) {
    return {
      title: 'Case study | Beacon Digital Health',
      description: 'Case study detail page for Beacon Digital Health.',
    };
  }
  return {
    title: `${study.title} | Case study | Beacon Digital Health`,
    description: study.summary,
  };
}

export default async function CaseStudyDetail({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout
      title={study.title}
      lede={study.oneLiner}
      tags={study.tags}
      primaryCta={{
        label: 'Request a demo',
        href: getMailtoLink(
          'Request a Demo',
          `Hi Izabela,\n\nI would like to discuss the ${study.title} case study and request a demonstration for our organization.`,
        ),
      }}
      secondaryLink={{
        label: 'Back to case studies →',
        href: '/case-studies',
      }}
      atAGlance={study.atAGlance}
      challenge={study.challenge}
      approach={study.approach}
      dataSources={study.dataSources}
      delivered={study.delivered}
      exploredModules={study.exploredModules}
      impact={study.impact}
      dashboardPreview={
        slug === 'expenditure-forensics' ? (
          <DashboardFramePreview
            imageSrc="/images/forensic-dashboard.png"
            imageAlt="Forensic expenditure analysis dashboard preview"
            ctaPrimaryHref={getMailtoLink('Forensics demo', 'I would like to see a demo of the forensics capability.')}
          />
        ) : undefined
      }
    />
  );
}
