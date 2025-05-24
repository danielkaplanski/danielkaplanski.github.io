"use client";
import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Daniel Kapłański</h3>
            <p className="text-gray-400">
              Computer Science student actively seeking internship or junior developer opportunities to gain hands-on experience and grow as a developer.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <SocialIcons className="flex gap-4" iconSize="text-xl" />
            <p className="text-gray-400 mt-4">danielkaplanski11@gmail.com</p>

          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Daniel Kapłański. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Built with <span className="text-primary-400">Next.js</span> and <span className="text-primary-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}