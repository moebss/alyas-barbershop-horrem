import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#0f0d0c] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Info & Google Maps Mini-Map Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#1a1613] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
                Kontakt & Anfahrt
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Buchen Sie Ihren <span className="italic text-[#d97736]">Verwöhn-Termin</span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                Besuchen Sie uns direkt in der Bahnhofstraße 14 in Kerpen-Horrem oder reservieren Sie Ihren Wunschtermin bequem online!
              </p>

              <div className="space-y-3 pt-2 text-xs font-medium text-stone-200">
                <div className="flex items-center justify-between bg-[#1a1613] p-4 rounded-2xl border border-stone-800">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#d97736] shrink-0" />
                    <div>
                      <span className="font-bold text-white block text-sm">Adresse:</span>
                      <span>Bahnhofstraße 14, 50169 Kerpen-Horrem</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Bahnhofstraße+14+50169+Kerpen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-stone-900 border border-stone-700 text-[#d97736] hover:text-white transition-colors shrink-0"
                    aria-label="Route in Google Maps öffnen"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-3 bg-[#1a1613] p-4 rounded-2xl border border-stone-800">
                  <Phone className="w-5 h-5 text-[#d97736] shrink-0" />
                  <div>
                    <span className="font-bold text-white block text-sm">Telefon & Mobil:</span>
                    <span>02273 9919005 / 0172 8987263</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#1a1613] p-4 rounded-2xl border border-stone-800">
                  <Clock className="w-5 h-5 text-[#d97736] shrink-0" />
                  <div>
                    <span className="font-bold text-white block text-sm">Öffnungszeiten:</span>
                    <span>Mo – Fr: 09:15 – 20:00 Uhr | Sa: 09:00 – 19:30 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Mini-Map Card */}
            <div className="bg-[#1a1613] border border-stone-800 rounded-3xl overflow-hidden shadow-lg p-2 mt-4">
              <iframe
                title="Google Maps Anfahrt Alyas Barbershop Kerpen-Horrem"
                src="https://maps.google.com/maps?q=Bahnhofstrasse%2014%2C%2050169%20Kerpen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 sm:h-60 rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

          {/* Right Column: Dark Container Form */}
          <div className="bg-[#1a1613] border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-[#d97736] mx-auto" />
                <h3 className="font-serif font-semibold text-2xl text-white">Vielen Dank!</h3>
                <p className="text-xs text-stone-300">Ihre Termin-Anfrage ist bei uns eingegangen. Wir bestätigen Ihren Termin in Kürze!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-serif font-semibold text-2xl text-white mb-2">Termin-Anfrage Senden</h3>
                
                <div>
                  <label className="block text-stone-300 font-bold mb-1">Ihr Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Alex Müller"
                    className="w-full bg-[#0f0d0c] border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d97736]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-bold mb-1">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0172 8987263"
                      className="w-full bg-[#0f0d0c] border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d97736]"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-bold mb-1">Wunsch-Behandlung</label>
                    <select className="w-full bg-[#0f0d0c] border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d97736]">
                      <option>Herrenhaarschnitt & Fade (22 €)</option>
                      <option>VIP Kombo Haar + Bart (34 €)</option>
                      <option>Bartpflege & Kontur (15 €)</option>
                      <option>Hot Towel Deluxe Rasur (25 €)</option>
                      <option>Kinderhaarschnitt (17 €)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1">Wunschtermin & Uhrzeit</label>
                  <textarea
                    rows={3}
                    placeholder="Wann möchten Sie vorbeikommen? (z. B. Samstag 15:00 Uhr)"
                    className="w-full bg-[#0f0d0c] border border-stone-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#d97736]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Unverbindlich Anfragen</span>
                </button>

                <p className="text-[10px] text-stone-400 text-center pt-2">
                  100% Kostenlos & Unverbindlich • Direkte Bestätigung durch das Studio.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
