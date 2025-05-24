"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            pathname === link.href
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
          }`}
        >
          {link.label}
          {pathname === link.href && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}