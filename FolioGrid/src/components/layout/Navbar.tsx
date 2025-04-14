
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Certifications", href: "#certifications" },
    { id: 6, name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple">
          Vikasini<span className="text-foreground">.dev</span>
        </Link>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="text-foreground hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`fixed lg:static lg:flex top-0 right-0 h-screen lg:h-auto w-3/4 sm:w-1/2 lg:w-auto pt-20 lg:pt-0 bg-white lg:bg-transparent shadow-2xl lg:shadow-none transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 px-8 lg:px-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Link 
                to="/admin" 
                className="nav-link text-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
