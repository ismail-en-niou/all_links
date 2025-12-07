'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0f1419] to-[#1a1a1a] animate-fade-out">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white/20 animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-loading-bar rounded-full" />
          </div>
          <p className="text-sm text-gray-400 animate-pulse">Loading your profile...</p>
        </div>
      </div>
    </div>
  );
}
