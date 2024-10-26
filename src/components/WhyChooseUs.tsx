import { Heart, Zap, Scale, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: 'Profesionalismo y empatía',
      description: 'Tratamos cada caso con la mayor sensibilidad y compromiso.'
    },
    {
      icon: Zap,
      title: 'Tecnología avanzada',
      description: 'Utilizamos equipos y productos de última generación para garantizar una limpieza exhaustiva.'
    },
    {
      icon: Scale,
      title: 'Cumplimiento normativo',
      description: 'Operamos conforme a todas las regulaciones sanitarias y de seguridad.'
    },
    {
      icon: CheckCircle,
      title: 'Resultados garantizados',
      description: 'Nuestro objetivo es restaurar el espacio de manera eficiente y respetuosa.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            ¿Por qué elegir nuestros servicios de limpieza post mortem?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <reason.icon className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}