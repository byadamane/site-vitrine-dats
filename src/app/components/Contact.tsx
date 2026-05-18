import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Participer aux collectes', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nouveau message depuis le site DATS*%0A%0A*Nom :* ${form.name}%0A*Email :* ${form.email}%0A*Téléphone :* ${form.phone}%0A*Sujet :* ${form.subject}%0A*Message :* ${form.message}`;
    window.open(`https://wa.me/221778873288?text=${text}`, '_blank');
  };

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

        {/* Image - visible en haut sur mobile */}
        <div className="mb-8 md:hidden">
          <img
            src="/images/contact-dats.jpg"
            alt="Contact DATS"
            className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            {/* Image - visible uniquement sur desktop */}
            <div className="mb-8 hidden md:block">
              <img
                src="/images/contact-dats.jpg"
                alt="Contact DATS"
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6 order-3 md:order-none">
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
                  <p className="text-gray-600">darattaqwahsocial@gmail.com</p>
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
                  <a href="tel:+221780110717" className="block text-gray-600 hover:text-[#016B61] transition-colors">+221 78 011 07 17</a>
                  <a href="tel:+221776665658" className="block text-gray-600 hover:text-[#016B61] transition-colors">+221 77 666 56 58</a>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/DarAtTaqwah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: '#016B61' }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/dar_at_taqwah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: '#CB5B05' }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@darattaqwahtv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: '#016B61' }}
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 -order-1 md:order-none">
            <h3 className="text-2xl mb-6" style={{ color: '#CB5B05' }}>
              Envoyez-nous un message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
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
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
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
