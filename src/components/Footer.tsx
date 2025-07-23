import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JA</span>
              </div>
              <span className="text-xl font-bold">Jabonara</span>
            </div>
            <p className="text-gray-300 text-sm">
              Productos con ingredientes mayormente naturales hechos con amor para el cuidado de tu piel. 
              Calidad artesanal en cada jabón.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/jabonesartesanales"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/jabonesartesanales"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:hola@jabonesartesanales.co"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Proceso Artesanal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-300">Aromaterapia</span>
              </li>
              <li>
                <span className="text-gray-300">Piel sensible</span>
              </li>
              <li>
                <span className="text-gray-300">Hidratación</span>
              </li>
              <li>
                <span className="text-gray-300">Purificación</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-pink-400" />
                <a
                  href="tel:+573112749302"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +57 311 274 9302
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-pink-400" />
                <a
                  href="mailto:hola@jabonesartesanales.co"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  hola@jabonesartesanales.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© {currentYear} Jabonara. Hecho con</span>
            <Heart size={16} className="text-pink-400 mx-1" />
            <span>en Colombia</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;