import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Jabones
              <span className="text-pink-500 block">Artesanales</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600">
                100% Hecho con Amor
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre nuestra colección de jabones artesanales hechos con ingredientes naturales. 
              Cuida tu piel con productos únicos y aromáticos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Ver Productos</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/process"
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <Sparkles size={20} />
                <span>Nuestro Proceso</span>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jabones artesanales"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
              <Sparkles className="text-pink-500" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-full shadow-lg">
              <span className="font-bold text-lg">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;