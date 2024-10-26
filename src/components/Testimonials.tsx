import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Cliente Particular",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "En un momento tan difícil, el equipo de AureaPro demostró una profesionalidad y sensibilidad excepcionales. Su servicio discreto y eficiente nos ayudó enormemente.",
    },
    {
      name: "Carlos Martínez",
      role: "Administrador de Fincas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Llevo años trabajando con AureaPro y siempre responden con rapidez y profesionalidad. Su atención al detalle y respeto por las situaciones delicadas es incomparable.",
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente Inmobiliaria",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Un servicio impecable. Su equipo maneja cada situación con el máximo respeto y profesionalidad. La calidad de su trabajo es excepcional.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold-500 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 text-center mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}