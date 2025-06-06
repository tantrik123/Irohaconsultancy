
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                I
              </div>
              <span className="text-xl font-bold">Iroha Consultancy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for studying abroad in Japan, Australia, and USA. 
              Officially registered with comprehensive visa support and language training since 2017.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Dillibazar, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+977-9840175421</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={16} />
                <span>Sun-Fri: 10AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/study-japan" className="text-gray-300 hover:text-white transition-colors">Study in Japan</Link></li>
              <li><Link to="/services/study-australia" className="text-gray-300 hover:text-white transition-colors">Study in Australia</Link></li>
              <li><Link to="/services/study-usa" className="text-gray-300 hover:text-white transition-colors">Study in USA</Link></li>
              <li><Link to="/services/visa-support" className="text-gray-300 hover:text-white transition-colors">Visa Support</Link></li>
              <li><Link to="/services/language-classes" className="text-gray-300 hover:text-white transition-colors">Language Classes</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Iroha Consultancy. All rights reserved. | Your Gateway to International Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
