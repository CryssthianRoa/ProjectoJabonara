import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-pink-500" size={24} />,
      title: "Teléfono",
      content: "+57 311 274 9302",
      link: "tel:+573112749302"
    },
    {
      icon: <Mail className="text-pink-500" size={24} />,
      title: "Email",
      content: "hola@jabonesartesanales.co",
      link: "mailto:hola@jabonesartesanales.co"
    },
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      title: "WhatsApp",
      content: "Chatea con nosotros",
      link: "https://wa.me/573112749302"
    },
    {
      icon: <Instagram className="text-purple-500" size={24} />,
      title: "Instagram",
      content: "@jabonesartesanales",
      link: "https://instagram.com/jabonesartesanales"
    }
  ];

  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 6:00 PM" },
    { day: "Sábado", hours: "9:00 AM - 2:00 PM" },
    { day: "Domingo", hours: "Cerrado" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos? ¿Necesitas ayuda con tu pedido? 
            Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Información de Contacto
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        {item.icon}
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {item.content}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-pink-500" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Horarios de Atención
                  </h3>
                </div>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{item.day}</span>
                      <span className="font-medium text-gray-800">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Envíanos un Mensaje
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="producto">Consulta sobre productos</option>
                    <option value="pedido">Estado de mi pedido</option>
                    <option value="sugerencia">Sugerencias</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra respuestas a las preguntas más comunes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Los jabones son aptos para pieles sensibles?",
                answer: "Sí, todos nuestros jabones están formulados con ingredientes naturales suaves. Especialmente recomendamos el jabón de miel y avena o el de aloe vera para pieles sensibles."
              },
              {
                question: "¿Cuánto tiempo duran los jabones?",
                answer: "Nuestros jabones duran aproximadamente 2-3 meses con uso diario, dependiendo del cuidado y almacenamiento. Recomendamos mantenerlos en lugar seco entre usos."
              },
              {
                question: "¿Hacen envíos a toda Colombia?",
                answer: "Sí, realizamos envíos a nivel nacional. El tiempo de entrega varía entre 3-7 días hábiles dependiendo de la ciudad de destino."
              },
              {
                question: "¿Tienen garantía de satisfacción?",
                answer: "Absolutamente. Si no estás satisfecho con tu compra, puedes contactarnos dentro de los primeros 30 días para encontrar una solución."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;