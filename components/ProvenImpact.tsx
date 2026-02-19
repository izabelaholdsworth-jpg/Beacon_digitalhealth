import { FileText, BarChart3 } from 'lucide-react';

export default function ProvenImpact() {
    return (
        <section className="py-16 bg-slate-900 border-y border-slate-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-shrink-0">
                        <h3 className="text-lg font-bold text-white tracking-wider uppercase flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-sky-400" />
                            Evidence
                        </h3>
                    </div>

                    <div className="flex-grow">
                        <p className="text-lg text-slate-200 leading-relaxed">
                            Full case studies and sample dashboards available on request. Detailed methodologies under NDA where required.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
