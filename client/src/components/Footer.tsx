import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rich-black border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-montserrat font-bold mb-4">
              <span className="text-white">CTRL</span>
              <span className="text-gold">+</span>
              <span className="text-white">ALT</span>
              <span className="text-gold">+</span>
              <span className="text-gold">ELITE</span>
            </h3>
            <p className="font-opensans text-gray-400 max-w-xs">
              Empowering businesses and individuals through intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-montserrat font-bold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/services" 
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    View All Services
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    Content Creation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    Business Automation
                  </button>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-gold transition-colors text-sm">
                    Custom Projects
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </Link>
              </div>
              <div className="mt-4">
                <Link href="#" className="inline-block px-6 py-2 border border-gold text-gold font-montserrat text-sm hover:bg-gold hover:text-rich-black transition-all duration-300">
                  SUBSCRIBE
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CTRL+ALT+ELITE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
