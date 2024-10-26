import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Contacte con nosotros
            </h2>
            <p className="text-gray-600 mb-8">
              Entendemos que estas situaciones requieren atención inmediata y máxima discreción. Nuestro equipo está disponible 24/7 para atenderle y ofrecerle una solución profesional y respetuosa. Garantizamos respuesta inmediata y presupuesto sin compromiso.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-gold-500" />
                <span>690 22 09 44</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gold-500" />
                <span>info@aureapro.es</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-gold-500" />
                <span>Barcelona y área metropolitana</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="emergency"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
              />
              <label htmlFor="emergency" className="ml-2 block text-sm text-gray-700">
                Solicitud urgente (respuesta en menos de 1 hora)
              </label>
            </div>

            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="privacy"
                required
                className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                Acepto la <a href="#" className="text-gold-500 hover:underline">política de privacidad</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-navy-900 text-white py-3 px-6 rounded-md hover:bg-navy-800 transition"
            >
              Solicitar presupuesto sin compromiso
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}