import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3>
          <span className="text-2xl font-bold text-green-500">Toyokazu Miura</span>
          <br />
          <span className="text-green-500">t0y0chi</span>
        </h3>
        <div className="space-y-4 text-gray-300">
          <p>
            Full Stack Developer & CEO at pico, passionate about creating innovative solutions
            and leading technological initiatives.
          </p>
          <div className="text-sm">
            <div className="flex items-center space-x-2 text-green-500">
              <Code2 className="h-5 w-5" />
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2 text-green-500">
              <Rocket className="h-5 w-5" />
              <span>CEO at pico</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-square"
      >
        <img
          src="/profile.jpg"
          alt="profile"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 rounded-lg" />
      </motion.div>
    </div>
  );
};

export default About;
