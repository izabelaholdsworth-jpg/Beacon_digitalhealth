import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackToHomeProps {
  className?: string;
  label?: string;
  variant?: 'pill' | 'link';
}

export default function BackToHome({
  className = '',
  label = 'Back to home',
  variant = 'pill',
}: BackToHomeProps) {
  if (variant === 'link') {
    return (
      <Link
        href="/"
        aria-label={label}
        className={`inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50 rounded ${className}`}
      >
        <ArrowLeft className="w-4 h-4" />
        {label}
      </Link>
    );
  }

  // Default: pill variant
  return (
    <Link
      href="/"
      aria-label={label}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${className}`}
    >
      <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
      <span>{label}</span>
    </Link>
  );
}
