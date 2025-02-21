import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const fullText = 'Coming Soon';

  useEffect(() => {
    const animateText = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 150);

      return interval;
    };

    // Initial animation
    let interval = animateText();

    // Repeat animation every 5 seconds
    const repeatInterval = setInterval(() => {
      setText(''); // Reset text
      clearInterval(interval); // Clear current animation
      interval = animateText(); // Start new animation
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(repeatInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-indigo-800 to-cyan-700 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Header */}
      <header className="p-4 sm:p-6 relative">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wider animate-fade-in">
          <span className="text-gray-400">&lt;</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            deploystic
          </span>
          <span className="text-gray-400">/&gt;</span>
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 relative">
        <div className="text-center space-y-6 sm:space-y-8 animate-slide-up">
          <div className="relative">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold min-h-[1.2em]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 relative z-10">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </h2>
            {/* Neon glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-50 blur-2xl -z-0 animate-glow"></div>
          </div>
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-100 font-light max-w-3xl mx-auto leading-relaxed">
              Transforming the future of technology
            </p>
            <p className="text-base sm:text-xl text-cyan-200/80 max-w-2xl mx-auto px-4">
            We're crafting something amazing for you. Stay tuned!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center text-cyan-200/80 relative gap-4 sm:gap-0">
        <div className="text-sm sm:text-base text-center sm:text-left">
          © {new Date().getFullYear()} deploystic. All rights reserved.
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a 
            href="https://www.instagram.com/deploystic" target="_blank" 
            className="hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://x.com/deploystic" target="_blank" 
            className="hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="#" 
            className="hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.facebook.com/deploystic" target="_blank" 
            className="hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;