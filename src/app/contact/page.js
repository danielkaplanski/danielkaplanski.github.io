"use client";
import ContactForm from '../../components/ContactForm';
import SocialIcons from '../../components/SocialIcons'; 
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Contact <span className="text-primary-600 dark:text-primary-400">Me</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
            Looking for a motivated Computer Science student to join your team or contribute to a project?  
            Feel free to reach out via the form or directly by email.  
            I'm ready to take on challenges, learn quickly, and make a valuable contribution.

            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary-600 dark:text-primary-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Gdańsk, Poland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary-600 dark:text-primary-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">danielkaplanski11@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <SocialIcons iconSize="text-2xl" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
