import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-navy-900 pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://biosocal.com/wp-content/uploads/2024/01/mattress-decontstruction.jpg?auto=format&fit=crop&q=80"
          alt="Servicios profesionales de limpieza post mortem en Barcelona"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Servicios profesionales de limpieza post mortem en Barcelona
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Especialistas en limpieza y desinfección tras fallecimientos, con la máxima profesionalidad, respeto y discreción. Servicio disponible 24/7 para atender situaciones delicadas en toda el área metropolitana de Barcelona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy-900 bg-gold-500 hover:bg-gold-400 transition"
              aria-label="Solicitar servicio de limpieza post mortem"
            >
              Solicitar servicio
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="tel:+34690220944"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-navy-900 transition"
              aria-label="Llamar para emergencias 24/7"
            >
              Emergencias 24/7
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}