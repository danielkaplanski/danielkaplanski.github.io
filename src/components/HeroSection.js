"use client";
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <p className="text-primary-600 dark:text-primary-400 font-mono mb-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Daniel Kapłański.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-300 mb-6">
  Passionate about{' '}
  <span
    className="inline-block text-primary-600 dark:text-primary-400"
    style={{
      display: 'inline-block',
      width: '16ch', 
      minHeight: '1.4em', 
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      verticalAlign: 'bottom', 
    }}
  >
    <TypeAnimation
      sequence={[
        'mobile applications',
        2000,
        'backend solutions',
        2000,
        'web applications',
        2000,
        'digital solutions',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h2>

          
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            🔭 Fullstack Engineer<br/>
            🎓 6th Semester Computer Science Student<br/>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <SocialIcons className="mt-8" />
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl group">
            <Image
              src="/images/avatar.jpg"
              alt="Daniel Kapłański"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Floating tech icons */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <div className="absolute top-10 -left-10 w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}