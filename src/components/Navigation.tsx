import React from 'react';
import { Terminal, Code2, User, Mail, Cpu } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-green-500 font-mono text-xl">t0y0chi</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { name: 'About', icon: User },
                { name: 'Skills', icon: Cpu },
                { name: 'Projects', icon: Code2 },
                { name: 'Contact', icon: Mail },
              ].map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
