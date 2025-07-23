import React from 'react';
import { Droplets, Leaf, Heart, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Leaf className="text-green-500" size={48} />,
      title: "Selección de Ingredientes",
      description: "Cuidadosamente seleccionamos los mejores ingredientes naturales: aceites esenciales, mantecas vegetales y extractos de plantas.",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Droplets className="text-blue-500" size={48} />,
      title: "Preparación Artesanal",
      description: "Mezclamos cuidadosamente cada ingrediente a temperatura controlada, respetando las propiedades naturales de cada elemento.",
      image: "https://images.pexels.com/photos/4465849/pexels-photo-4465849.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Heart className="text-pink-500" size={48} />,
      title: "Moldeado con Amor",
      description: "Cada jabón es moldeado a mano, asegurando que tenga la forma perfecta y la consistencia ideal para tu piel.",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Package className="text-purple-500" size={48} />,
      title: "Curado y Empaque",
      description: "Dejamos que los jabones curen durante 4-6 semanas para obtener la mejor calidad, luego los empacamos ecológicamente.",
      image: "https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Nuestro Proceso Artesanal
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada jabón es una obra de arte creada con técnicas tradicionales y los mejores ingredientes naturales. 
            Descubre cómo creamos productos únicos que cuidan tu piel y el medio ambiente.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-pink-500 font-semibold text-sm">
                          Paso {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creemos en la sostenibilidad, la calidad y el cuidado personal natural
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sostenibilidad
              </h3>
              <p className="text-gray-600">
                Usamos ingredientes orgánicos y empaques biodegradables para cuidar nuestro planeta.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pasión
              </h3>
              <p className="text-gray-600">
                Cada jabón está hecho con amor y dedicación, siguiendo recetas tradicionales perfeccionadas.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pureza
              </h3>
              <p className="text-gray-600">
                Sin químicos agresivos ni conservantes artificiales, solo ingredientes puros y naturales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Te gustaría probar nuestros jabones?
          </h2>
          <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
            Experimenta la diferencia de los productos artesanales naturales
          </p>
          <Link
              to="/products"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-200 transform hover:scale-105"
            >
              Ver Productos
            </Link>
          {/* <a
            href="/products"
            className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-200 transform hover:scale-105"
          >
            <span>Ver Productos</span>
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default Process;