import { Calendar, TrendingUp, Database, Building2 } from 'lucide-react';

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { number: '17+', label: 'Years NHS Experience', icon: <Calendar className="w-5 h-5 text-cyan mb-2" /> },
  { number: '£14.56B', label: 'Data Analyzed', icon: <TrendingUp className="w-5 h-5 text-cyan mb-2" /> },
  { number: '5.2M', label: 'Transactions Processed', icon: <Database className="w-5 h-5 text-cyan mb-2" /> },
  { number: 'NHS England', label: 'Programme Manager', icon: <Building2 className="w-5 h-5 text-cyan mb-2" /> },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-gray-50 border-t border-b border-gray-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group cursor-default transition-transform duration-300 text-center hover:scale-105"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-grey">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
