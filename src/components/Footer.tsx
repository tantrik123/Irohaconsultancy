
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/9bcc6496-749b-49d3-a6c1-5ec403bba5e0.png" 
                alt="Iroha Education Consultancy" 
                className="h-16 w-auto bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for studying abroad in Japan, Australia, and USA. 
              Officially registered with comprehensive visa support and language training since 2017.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-red-400" />
                <span>Dillibazar, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-red-400" />
                <span>+977-9840175421</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-red-400" />
                <span>info@irohaconsultancy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock size={18} className="text-red-400" />
                <span>Sun-Fri: 10AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-red-400 transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Study Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/study-japan" className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2">
                  <span>🇯🇵</span>
                  <span>Study in Japan</span>
                </Link>
              </li>
              <li>
                <Link to="/services/study-australia" className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2">
                  <span>🇦🇺</span>
                  <span>Study in Australia</span>
                </Link>
              </li>
              <li>
                <Link to="/services/study-usa" className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2">
                  <span>🇺🇸</span>
                  <span>Study in USA</span>
                </Link>
              </li>
              <li><Link to="/services/visa-support" className="text-gray-300 hover:text-red-400 transition-colors">Visa Support</Link></li>
              <li><Link to="/services/language-classes" className="text-gray-300 hover:text-red-400 transition-colors">Language Classes</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Iroha Consultancy. All rights reserved. | Your Gateway to International Education
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Globe size={16} className="text-red-400" />
              <span className="text-gray-400 text-sm">Registered Education Consultancy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
