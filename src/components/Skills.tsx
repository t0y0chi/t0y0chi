import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'TypeScript', level: 90 },
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'Nest.js', level: 70 },
  { name: 'Python', level: 75 },
  { name: 'Ruby', level: 80 },
  { name: 'AWS', level: 75 },
  { name: 'Google Cloud', level: 80 },
  { name: 'Firebase', level: 85 },
  { name: 'Linux', level: 85 },
];

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-500 font-semibold">{skill.name}</span>
            <span className="text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;