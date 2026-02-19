import Link from 'next/link';
import { getMailtoLink } from '@/lib/contact';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8">
          Make decisions <br />
          <span className="text-slate-500">with confidence</span>
        </h2>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Request a demo and we will show how this works on your data.
        </p>

        <Link
          href={getMailtoLink('Request a Demo', 'Hi Izabela,\n\nI would like to request a private demonstration of Beacon for our healthcare system.')}
          className="inline-block px-10 py-5 bg-primary text-background font-bold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]"
        >
          Request a Demo
        </Link>
      </div>
    </section>
  );
}