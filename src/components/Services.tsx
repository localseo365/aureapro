import { Shield, Clock, MapPin, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Limpieza post mortem',
      description: 'Realizamos una limpieza profunda y desinfección completa tras fallecimientos, eliminando olores y restaurando el ambiente. Utilizamos productos específicos y seguimos protocolos estrictos de bioseguridad.'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Servicio de emergencia disponible las 24 horas, los 365 días del año. Respuesta inmediata en toda Barcelona y área metropolitana para limpieza de escenarios traumáticos.'
    },
    {
      icon: MapPin,
      title: 'Cobertura Barcelona',
      description: 'Servicio de limpieza especializada en toda Barcelona y alrededores. Nos desplazamos a cualquier ubicación para realizar la desinfección tras fallecimientos.'
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Personal altamente cualificado y certificado en limpieza de escenarios traumáticos. Cumplimos con todas las normativas y protocolos de bioseguridad vigentes.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Expertos en limpieza de escenarios traumáticos
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              Enfrentar la limpieza y desinfección de un escenario traumático requiere una atención especial y un tratamiento delicado. Nuestro equipo se dedica a higienizar y desinfectar todo tipo de espacios donde se hayan producido una o varias defunciones, garantizando un ambiente seguro y respetuoso.
            </p>
            <h3 className="text-xl font-semibold text-navy-900 mt-8 mb-4">
              ¿Cómo realizamos la limpieza tras fallecimiento?
            </h3>
            <p>
              Entendemos que cada situación de fallecimiento, ya sea por acciones traumáticas como asesinatos o suicidios, demanda un enfoque extremadamente sensible. Nuestro personal muestra el máximo respeto hacia el entorno del fallecido, realizando las tareas de manera discreta y mínima para no alterar el espacio más de lo necesario.
            </p>
            <h3 className="text-xl font-semibold text-navy-900 mt-8 mb-4">
              Nuestro enfoque sistemático en la limpieza forense
            </h3>
            <p>
              Implementamos un método estructurado para la limpieza post mortem, asegurándonos de cumplir con todos los estándares de desinfección vigentes. Nuestros técnicos están altamente capacitados en la eliminación de contaminantes biológicos y en la erradicación de olores persistentes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <service.icon className="w-12 h-12 text-gold-500 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}