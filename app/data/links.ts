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
    url: "https://linkedin.com/in/ismail-en-niou",
    icon: Linkedin,
    description: "Connect with me professionally"
  },
  {
    name: "GitHub",
    url: "https://github.com/ismail-en-niou",
    icon: Github,
    description: "Check out my projects"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ismail_enniou",
    icon: Instagram,
    description: "See my visual content"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@IsmailEnniou",
    icon: Youtube,
    description: "Watch my videos"
  },
  {
    name: "Email",
    url: "mailto:ismail.enniou@gmail.com",
    icon: Mail,
    description: "Get in touch"
  },
  {
    name: "Website",
    url: "https://ien-niou.vercel.app/",
    icon: Globe,
    description: "Visit my portfolio"
  }
];
