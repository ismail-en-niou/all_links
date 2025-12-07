'use client';

import { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import LoadingScreen from './components/LoadingScreen';
import { socialLinks } from './data/links';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f1419] to-[#1a1a1a] py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <main className="max-w-4xl mx-auto w-full">
        <ProfileHeader
          name="Ismail En-niou"
          avatar='https://avatars.githubusercontent.com/u/132809252?s=400&u=a423fc9012156e22124df85e7067fc73efb7193d&v=4'
          role="Software Engineer | 1337 student and software quality master at Fs tetouan"
          location="Tetouan, Morocco"
          bio="Passionate about creating innovative solutions and connecting with like-minded professionals. Let's build something amazing together."
        />
        
        <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 mb-8 sm:mb-10 md:mb-12 items-center">
          {socialLinks.map((link, index) => (
            <div
              key={link.name}
              className="w-full flex items-center animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <LinkCard link={link} />
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </main>
    </div>
    </>
  );
}
