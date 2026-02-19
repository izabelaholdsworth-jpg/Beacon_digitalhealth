import { FileText, TrendingUp, BarChart3, Target } from 'lucide-react';

const stats = [
    { label: "Spend analysed", value: "£14.56B", icon: BarChart3 },
    { label: "Transactions reviewed", value: "5.2M", icon: FileText },
    { label: "Control opportunity surfaced", value: "£139.62M", icon: TrendingUp },
    { label: "Targets identified (6 weeks)", value: "40+", icon: Target },
];

export default function Credibility() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Evidence-led intelligence that drives decisions.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Examples from recent NHS and private-sector work.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="flex justify-center mb-6">
                                <stat.icon className="w-8 h-8 text-sky-500 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-slate-600 uppercase tracking-widest leading-tight">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
