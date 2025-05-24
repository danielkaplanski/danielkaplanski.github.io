"use client";
import Image from 'next/image';
import SkillsSection from '../../components/SkillsSection';


export default function AboutPage() {
  return (
    <div className="space-y-20">
      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-primary-500">
                <Image
                  src="/images/about-me.jpg"
                  alt="Daniel Kapłański"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                6th Semester Computer Science Student
                </h2>

                <div className="prose dark:prose-invert max-w-none mb-8">
                <p>
                    I'm currently pursuing a degree in Computer Science, where I've been developing a strong foundation
                    in software engineering, algorithms, and systems design. My academic journey has been complemented 
                    by hands-on projects.
                </p><br/>
                <p>
                    I enjoy building web and mobile applications that focus on performance and user experience. 
                    Through various university and personal projects, I've gained experience working with  
                    technologies like React, Java, C#, React Native, Next.js, Node.js, and .NET.
                </p><br/>
                <p>
                    I'm a fast learner who thrives in problem-solving environments. When I encounter something I don’t yet know, 
                    I make it a priority to master it — whether it's a new technology, framework, or concept. 
                    This mindset has helped me quickly adapt and grow throughout my studies and projects.
                </p><br/>
                <p>
                    Outside of tech, I enjoy staying active through sports and relaxing by going fishing. 
                    These hobbies help me maintain a balanced and focused approach to both work and life.
                </p>
</div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Name:</h3>
                  <p className="text-gray-700 dark:text-gray-300">Daniel Kapłański</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email:</h3>
                  <p className="text-gray-700 dark:text-gray-300">danielkaplanski11@gmail.com</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location:</h3>
                  <p className="text-gray-700 dark:text-gray-300">Gdańsk, Poland</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience:</h3>
                  <p className="text-gray-700 dark:text-gray-300">Hands-on experience through academic and personal projects</p>

                </div>
              </div>
              
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

    
    </div>
  );
}