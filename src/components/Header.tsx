import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
          Welcome
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item)} className="text-gray-300 hover:text-purple-400 transition-colors uppercase tracking-wide text-sm font-medium">
                  {item}
                </button>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-800/95 backdrop-blur-md">
          <ul className="flex flex-col py-4">
            {['home', 'about', 'projects', 'skills', 'contact'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item)} className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-purple-400 transition-colors uppercase tracking-wide text-sm font-medium">
                  {item}
                </button>
              </li>)}
          </ul>
        </nav>}
    </header>;
}