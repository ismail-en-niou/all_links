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
    <div className="text-center mb-12 animate-fade-in">
      <div className="mb-6 inline-block relative">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <span className="text-5xl font-bold text-white">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
        {name}
      </h1>
      {role && (
        <div className="flex items-center justify-center gap-2 mb-3">
          <Briefcase className="w-4 h-4 text-gray-400" />
          <p className="text-lg text-gray-300">
            {role}
          </p>
        </div>
      )}
      {location && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400" />
          <p className="text-sm text-gray-400">
            {location}
          </p>
        </div>
      )}
      <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {bio}
      </p>
    </div>
  );
}
