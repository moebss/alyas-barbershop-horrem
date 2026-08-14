import { Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import imgCut from '../images/service_cut.jpg';
import imgBeard from '../images/service_beard.jpg';
import imgVip from '../images/service_vip.jpg';
import imgHotTowel from '../images/service_hottowel.jpg';
import imgKids from '../images/service_kids.jpg';
import imgWaxing from '../images/service_waxing.jpg';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Herrenhaarschnitt & Fade',
      price: '22 €',
      time: '30 Min',
      image: imgCut,
      badge: null,
      desc: 'Präzisions-Haarschnitt, Skin Fade nach Wunsch, Waschen & individuelles Styling.',
      features: ['Übergang auf 0mm / Skin Fade', 'Haarwäsche & Premium Styling', 'Nackenkontur sauber ausrasiert']
    },
    {
      title: 'Bartpflege & Konturen',
      price: '15 €',
      time: '20 Min',
      image: imgBeard,
      badge: null,
      desc: 'Formen des Bartes mit Trimmer & scharfem Rasiermesser-Finish inkl. Bartöl.',
      features: ['Exakte Rasiermesser-Linien', 'Pflegendes Bartöl & Balsam', 'Schnurrbart-Korrektur']
    },
    {
      title: 'VIP Kombo Deluxe',
      price: '34 €',
      time: '45 Min',
      image: imgVip,
      badge: 'Beliebtestes Paket',
      desc: 'Das Komplettpaket: Präzisions-Cut, Bartdesign, Hot Towel Kompresse & Styling.',
      features: ['Haarschnitt & Skin Fade', 'Vollständige Bartpflege', 'Heiße Kräuterkompresse']
    },
    {
      title: 'Hot Towel Deluxe Rasur',
      price: '25 €',
      time: '30 Min',
      image: imgHotTowel,
      badge: null,
      desc: 'Traditionelle Nassrasur mit warmer Dampfkompresse, Rasierschaum & Kühlbalsam.',
      features: ['Warme Kräuter-Dampfkompresse', 'Klassische Rasiermesser-Rasur', 'Beruhigende After-Shave Lotion']
    },
    {
      title: 'Kinderhaarschnitt (bis 12 J.)',
      price: '17 €',
      time: '25 Min',
      image: imgKids,
      badge: null,
      desc: 'Geduldige & trendige Haarschnitte für Kids und Jugendliche jeden Alters.',
      features: ['Moderne Cut-Trends', 'Geduldiger & freundlicher Service', 'Muster & Konturen auf Wunsch']
    },
    {
      title: 'Face Waxing & Augenbrauen',
      price: 'ab 8 €',
      time: '15 Min',
      image: imgWaxing,
      badge: null,
      desc: 'Schonende Haarentfernung an Ohren, Nase & Zupfen der Augenbrauen mit Faden.',
      features: ['Fadentechnik für Augenbrauen', 'Schonendes Ohr- & Nasenwaxing', 'Perfekt sauberes Gesamtbild']
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#171412] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
            Leistungen & Preistransparenz
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight">
            Barber-Menü & Behandlungen
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-normal">
            Echtes Handwerk zu fairen Preisen. Wählen Sie Ihre Behandlung oder kombinieren Sie Cut & Bartpflege.
          </p>
        </div>

        {/* Cohesive 3x2 Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-[#171412] border rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 ${
                service.badge 
                  ? 'border-[#d97736]/60 ring-1 ring-[#d97736]/30' 
                  : 'border-stone-800/90 hover:border-stone-700'
              }`}
            >
              <div>
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-transparent to-black/20" />
                  
                  {/* Optional Featured Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 bg-[#d97736] text-stone-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#0c0a09]/90 backdrop-blur-md border border-stone-700 px-3.5 py-1 rounded-xl shadow-lg">
                    <span className="font-serif font-bold text-[#d97736] text-lg sm:text-xl">{service.price}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#d97736]" />
                      <span>{service.time}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-stone-800/80 text-xs text-stone-300">
                    {service.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d97736] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer per card */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenContact}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    service.badge
                      ? 'bg-[#d97736] hover:bg-[#c26527] text-stone-950 shadow-md'
                      : 'bg-[#0c0a09] hover:bg-stone-900 text-stone-200 border border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <span>Termin anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-current opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Walk-In / Consultation Banner */}
        <div className="mt-14 bg-[#171412] border border-stone-800 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Spontan vorbeikommen? <span className="text-[#d97736]">Walk-In ist immer willkommen!</span>
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm">
              Sie brauchen nicht zwingend einen Termin. Besuchen Sie uns einfach in der Bahnhofstraße 14 in Horrem.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:022739919005"
              className="bg-[#0c0a09] hover:bg-stone-900 text-white border border-stone-700 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              02273 9919005
            </a>
            <button
              onClick={onOpenContact}
              className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Termin anfragen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
