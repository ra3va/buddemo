'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BudBeamComingSoon() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-gray-900 text-white px-8 py-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/40"></div>
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Logo Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/logo/bbthor.png"
            alt="BudBeam Technologies Logo"
            width={350}
            height={350}
            style={{ filter: 'brightness(1.2) saturate(1.1)' }}
            priority
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            A New Era of Dispensary Intelligence is Coming.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            BudBeam is building a compliant, intelligent, and seamless platform to revolutionize the cannabis retail experience. We are currently undergoing SOC 2 certification and integrating with industry-leading partners to ensure a secure and powerful launch.
          </motion.p>

        </motion.div>
      </div>

      {/* Contact Section - Centered Below Both Columns */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mt-12 z-10"
      >
        <p className="text-md text-gray-400 mb-2 text-center">For partnership or investment inquiries, please contact us:</p>
        <a href="mailto:ra@budbeam.io" className="text-2xl font-mono text-green-400 hover:text-green-300 transition-colors duration-300 tracking-wider block text-center">
          ra@budbeam.io
        </a>
      </motion.div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-xs text-gray-600 z-10"
      >
        &copy; {new Date().getFullYear()} BudBeam Technologies, Inc. All rights reserved.
      </motion.footer>
    </main>
  );
} 