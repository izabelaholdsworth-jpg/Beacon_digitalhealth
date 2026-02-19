import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getMailtoLink, CONTACT_EMAIL } from '@/lib/contact';

export const metadata = {
  title: 'Contact | Beacon Digital Health',
  description: 'Get in touch with Beacon Digital Health to learn more about our services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section */}
      <div className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors">
            <span>←</span>
            <span>Back to home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-xl text-white/80">Let's discuss how Beacon can support your organisation.</p>
        </div>
      </div>

      {/* White Content Section */}
      <div className="bg-white text-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
          
          {/* Contact Methods */}
          <section>
            <h2 className="text-3xl font-bold mb-12">Contact us</h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              {/* Email */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                <p className="text-slate-700 mb-4">
                  For demo requests, enquiries, or any questions about our services.
                </p>
                <a
                  href={getMailtoLink('Beacon Digital Health enquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send an email
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-slate-600 mt-4">{CONTACT_EMAIL}</p>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Location</h3>
                <p className="text-slate-700 mb-4">
                  Based in London, United Kingdom.
                </p>
                <a
                  href="https://maps.google.com/?q=London,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View on map
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Quick Facts */}
          <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-xl font-bold mb-6">What to expect</h3>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-slate-700">Quick response to demo requests and enquiries</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-slate-700">Typical first deployment: 2–6 weeks to first usable output</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-slate-700">We work with the data you already have</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-slate-700">Outputs designed for decision-makers: clear metrics, defensible logic</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold mb-3">Ready to explore Beacon?</h3>
            <p className="text-base text-slate-800 mb-6">Request a demo to see how we can work with your data.</p>
            <a
              href={getMailtoLink('Beacon Digital Health enquiry', 'Hi Izabela,\n\nI\'d like to request a demo of Beacon Digital Health for our organisation.')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
