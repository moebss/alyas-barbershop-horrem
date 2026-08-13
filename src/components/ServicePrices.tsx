import { Check, ArrowRight, Clock } from 'lucide-react';
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
      price: 'ab 22 €',
      time: '30 Min',
      image: imgCut,
      desc: 'Präzisions-Haarschnitt, Skin Fade nach Wunsch, Waschen & Styling.',
      highlights: ['Übergang auf 0mm möglich', 'Haarwäsche & Styling', 'Nackenkontur ausrasiert']
    },
    {
      title: 'Bartpflege & Konturen',
      price: 'ab 15 €',
      time: '20 Min',
      image: imgBeard,
      desc: 'Formen des Bartes mit Trimmer & Rasiermesser-Finish inkl. Pflegeöl.',
      highlights: ['Schärfste Rasiermesser-Linien', 'Bartöl & Pflege', 'Schnurrbart-Trimming']
    },
    {
      title: 'VIP Kombo (Haar + Bart)',
      price: 'ab 34 €',
      time: '45 Min',
      image: imgVip,
      desc: 'Das Komplettpaket: Haarschnitt, Bartgestaltung, Hot Towel & Styling.',
      highlights: ['Haarschnitt & Fade', 'Bart in Form bringen', 'Hot Towel Handtuch-Kompresse']
    },
    {
      title: 'Hot Towel Deluxe Rasur',
      price: 'ab 25 €',
      time: '30 Min',
      image: imgHotTowel,
      desc: 'Traditionelle Nassrasur mit warmer Kompresse & Gesichts-Kühlcreme.',
      highlights: ['Warme Kräuter-Kompresse', 'Klassischer Schaum', 'After-Shave Balsam']
    },
    {
      title: 'Kinderhaarschnitt (bis 12 J.)',
      price: 'ab 17 €',
      time: '25 Min',
      image: imgKids,
      desc: 'Geduldige & trendige Haarschnitte für Kids & Jugendliche.',
      highlights: ['Freundlicher Service', 'Moderne Cut-Trends', 'Muster & Striche auf Wunsch']
    },
    {
      title: 'Gesichts-Waxing & Augenbrauen',
      price: 'ab 8 €',
      time: '15 Min',
      image: imgWaxing,
      desc: 'Entfernung von Nasen-, Ohrenhaaren & Zupfen der Augenbrauen mit Faden.',
      highlights: ['Sanftes Ohr-/Nasenwaxing', 'Fadentechnik Augenbrauen', 'Glatte Konturen']
    }
  ];

  return (
    <section id="preise" className="py-20 bg-[#0f0d0c] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#1a1613] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
            Behandlungen & Preise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            Barber-Handwerk & Preistabelle
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Faire Preise, erstklassiger Service & entspannte Gentlemen-Atmosphäre in Horrem.
          </p>
        </div>

        {/* Services Grid with Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-[#1a1613] border border-stone-800/90 rounded-3xl overflow-hidden hover:border-[#d97736]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              
              <div>
                {/* Visual Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] via-transparent to-black/20" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#0f0d0c]/90 backdrop-blur-md border border-[#d97736]/40 px-3.5 py-1 rounded-xl shadow-lg">
                    <span className="font-serif font-extrabold text-[#d97736] text-lg">{s.price}</span>
                  </div>

                  {/* Time Badge */}
                  <div className="absolute top-3 left-3 bg-[#0f0d0c]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700/60 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#d97736]" />
                    <span className="text-[11px] font-bold text-stone-200 uppercase tracking-wider">{s.time}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-semibold text-xl text-white leading-snug group-hover:text-[#d97736] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed font-normal">
                    {s.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-stone-300 font-medium pt-2 border-t border-stone-800/80">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d97736] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  aria-label={`Termin für ${s.title} buchen`}
                  className="w-full bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer shadow-md group-hover:shadow-lg"
                >
                  <span>Termin Buchen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
