import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Scene3D from './components/Scene3D';
import Navigation from './components/Navigation';
import MatrixRain from './components/MatrixRain';
import Skills from './components/Skills';
import About from './components/About';
import ContactForm from './components/ContactForm';
import { Terminal, Github, Code } from 'lucide-react';

const projects = [
  {
    name: 'Timee',
    description: 'A job matching platform that connects part-time workers with restaurants and stores based on available time slots.',
    url: 'https://timee.co.jp/',
  },
  {
    name: 'LUUP',
    description: 'Worked on mobility sharing platform development.',
    url: 'https://luup.sc/',
  },
  {
    name: 'STORES',
    description: 'Developed e-commerce platform features and improvements.',
    url: 'https://stores.jp/',
  },
  {
    name: 'en Japan',
    description: 'Enhanced recruitment platform capabilities.',
    url: 'https://corp.en-japan.com/',
  },
];

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <MatrixRain />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-500">
            {'<Hello />'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            I am a full stack developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-green-500 text-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-400 transition-colors"
            >
              <Terminal className="h-5 w-5" />
              <span>Initialize Contact</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-green-500">/about</h2>
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-green-500">/skills</h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-green-500">/projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-green-500">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors flex items-center space-x-2"
                  >
                    <Code className="h-4 w-4" />
                    <span>View Project</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-green-500">/contact</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Terminal className="h-6 w-6 text-green-500" />
            <span className="ml-2 text-green-500">t0y0chi</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/t0y0chi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;