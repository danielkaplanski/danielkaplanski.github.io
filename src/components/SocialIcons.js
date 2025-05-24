"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/danielkaplanski', icon: <FaGithub /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-kap%C5%82a%C5%84ski-4b6098271/', icon: <FaLinkedin /> },

];

export default function SocialIcons({ className = '', iconSize = 'text-2xl' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconSize} text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors`}
          aria-label={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
