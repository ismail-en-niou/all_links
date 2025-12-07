import { LucideIcon, Instagram, Twitter, Github, Linkedin, Youtube, Facebook, Globe, Mail } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    description: "Connect with me professionally"
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    description: "Check out my projects"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
    description: "Follow me for updates"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: Instagram,
    description: "See my visual content"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourusername",
    icon: Youtube,
    description: "Watch my videos"
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    description: "Get in touch"
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
    icon: Globe,
    description: "Visit my portfolio"
  }
];
