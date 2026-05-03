import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#016B61' }}>
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour toute question ou pour discuter de votre projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwdmlsbGFnZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMwNDA2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Communauté au Sénégal"
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#016B61' }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Localisation</h4>
                  <p className="text-gray-600">Sénégal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#CB5B05' }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-gray-600">contact@dats-senegal.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#016B61' }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Téléphone</h4>
                  <p className="text-gray-600">+221 XX XXX XX XX</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: '#016B61' }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: '#CB5B05' }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl mb-6" style={{ color: '#CB5B05' }}>
              Envoyez-nous un message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{ focusRingColor: '#016B61' }}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{ focusRingColor: '#016B61' }}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{ focusRingColor: '#016B61' }}
                  placeholder="+221 XX XXX XX XX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Sujet
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  style={{ focusRingColor: '#016B61' }}
                >
                  <option>Participer aux collectes</option>
                  <option>Prendre en charge un puits</option>
                  <option>Information générale</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ focusRingColor: '#016B61' }}
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#CB5B05' }}
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
