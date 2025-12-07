import { MapPin, Briefcase } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatar?: string;
  role?: string;
  location?: string;
}

export default function ProfileHeader({ name, bio, avatar, role, location }: ProfileHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4">
      <div className="mb-4 sm:mb-5 md:mb-6 inline-block relative">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 sm:border-3 md:border-4 border-white/20 shadow-2xl object-cover"
          />
        ) : (
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 sm:border-3 md:border-4 border-white/20 shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <span className="text-4xl sm:text-4xl md:text-5xl font-bold text-white">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white px-2">
        {name}
      </h1>
      {role && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 px-2">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center">
            {role}
          </p>
        </div>
      )}
      {location && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-2">
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-gray-400">
            {location}
          </p>
        </div>
      )}
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
        {bio}
      </p>
    </div>
  );
}
