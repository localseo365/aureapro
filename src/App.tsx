import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      
      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AureaPro</h3>
              <p className="text-gray-400">
                Servicios profesionales de limpieza especializada en Barcelona
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">
                Tel: 690 22 09 44<br />
                Email: info@aureapro.es<br />
                Carrer de Lepant, 322<br />
                L'Eixample, 08025 Barcelona
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-gold-400">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-gold-400">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="w-full h-64 rounded-lg overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5776268466387!2d2.1734661!3d41.4051244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd4a76c73%3A0x18ae4b5e0751684e!2sCarrer%20de%20Lepant%2C%20322%2C%20L&#39;Eixample%2C%2008025%20Barcelona!5e0!3m2!1sen!2ses!4v1709561234567!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de AureaPro"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} AureaPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}

export default App;