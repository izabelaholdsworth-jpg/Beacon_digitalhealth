import CaseStudiesClient from './case-studies-client';

export const metadata = {
  title: 'Case studies | Beacon Digital Health',
  description:
    'Selected engagements across NHS and private sector. Names anonymised. Evidence available via demos and excerpts.',
};

export default function CaseStudiesIndex() {
  return <CaseStudiesClient />;
}
