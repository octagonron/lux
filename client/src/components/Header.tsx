import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (anchor: string) => {
    setIsOpen(false);
    const element = document.getElementById(anchor);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect if we're on the home page
  const isHomePage = location === "/";

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-rich-black/90 shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <img src="/images/logolock.png" alt="CTRL+ALT+ELITE Logo" className="w-full h-full object-contain" />
          </div>
          <img src="/images/logoword.png" alt="CTRL+ALT+ELITE" className="h-6" />
        </Link>
        
        {!isMobile && (
          <nav className="block">
            <ul className="flex space-x-8 font-montserrat text-sm tracking-wide">
              {isHomePage ? (
                // Home page: anchor links
                <>
                  <li>
                    <button 
                      onClick={() => handleAnchorClick("landing")} 
                      className="text-white hover:text-gold transition-colors"
                    >
                      HOME
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleAnchorClick("content")} 
                      className="text-white hover:text-gold transition-colors"
                    >
                      CONTENT
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleAnchorClick("business")} 
                      className="text-white hover:text-gold transition-colors"
                    >
                      BUSINESS
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleAnchorClick("about")} 
                      className="text-white hover:text-gold transition-colors"
                    >
                      ABOUT
                    </button>
                  </li>
                </>
              ) : (
                // Other pages: regular navigation links
                <>
                  <li>
                    <Link 
                      href="/" 
                      className="text-white hover:text-gold transition-colors"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services" 
                      className={`text-white hover:text-gold transition-colors ${location === "/services" ? "text-gold" : ""}`}
                    >
                      SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/projects" 
                      className={`text-white hover:text-gold transition-colors ${location === "/projects" ? "text-gold" : ""}`}
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#about" 
                      className="text-white hover:text-gold transition-colors"
                    >
                      ABOUT
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
        
        {isMobile && (
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            className="bg-rich-black w-full border-t border-gold/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="font-montserrat text-sm tracking-wide space-y-4">
                {isHomePage ? (
                  // Home page: anchor links for mobile
                  <>
                    <li>
                      <button 
                        onClick={() => handleAnchorClick("landing")} 
                        className="block text-white hover:text-gold transition-colors py-2"
                      >
                        HOME
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleAnchorClick("content")} 
                        className="block text-white hover:text-gold transition-colors py-2"
                      >
                        CONTENT
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleAnchorClick("business")} 
                        className="block text-white hover:text-gold transition-colors py-2"
                      >
                        BUSINESS
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleAnchorClick("about")} 
                        className="block text-white hover:text-gold transition-colors py-2"
                      >
                        ABOUT
                      </button>
                    </li>
                    <li className="border-t border-gold/10 mt-4 pt-4">
                      <Link 
                        href="/services" 
                        className="block text-white hover:text-gold transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/projects" 
                        className="block text-white hover:text-gold transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        PROJECTS
                      </Link>
                    </li>
                  </>
                ) : (
                  // Other pages: navigation links for mobile
                  <>
                    <li>
                      <Link 
                        href="/" 
                        className="block text-white hover:text-gold transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services" 
                        className={`block text-white hover:text-gold transition-colors py-2 ${location === "/services" ? "text-gold" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/projects" 
                        className={`block text-white hover:text-gold transition-colors py-2 ${location === "/projects" ? "text-gold" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        PROJECTS
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/#about" 
                        className="block text-white hover:text-gold transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        ABOUT
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
