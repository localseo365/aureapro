import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 flex-1">
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gold-400 hover:underline">
            Política de Cookies
          </a>
          <button
            onClick={acceptCookies}
            className="bg-gold-500 text-navy-900 px-4 py-2 rounded-md hover:bg-gold-400 transition flex items-center gap-2"
          >
            Aceptar
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}