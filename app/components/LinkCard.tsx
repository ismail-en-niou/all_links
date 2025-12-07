import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SocialLink } from '../data/links';

interface LinkCardProps {
  link: SocialLink;
}

export default function LinkCard({ link }: LinkCardProps) {
  const Icon = link.icon;
  
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-2xl p-3 sm:p-4 md:p-5 rounded-lg bg-white/5 border border-white/10
        hover:bg-white/10 hover:border-white/20 transition-all duration-300
        backdrop-blur-sm flex items-center gap-3 sm:gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-white/10 flex items-center justify-center
        group-hover:bg-white/15 transition-colors duration-300">
        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5">
          {link.name}
        </h3>
        {link.description && (
          <p className="text-xs sm:text-sm text-gray-400 truncate">
            {link.description}
          </p>
        )}
      </div>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
    </Link>
  );
}
