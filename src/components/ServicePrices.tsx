import { Check, ArrowRight } from 'lucide-react';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Herrenhaarschnitt & Fade',
      price: 'ab 22 €',
      time: '30 Min',
      desc: 'Präzisions-Haarschnitt, Skin Fade nach Wunsch, Waschen & Styling.',
      highlights: ['Übergang auf 0mm möglich', 'Haarwäsche & Styling', 'Nackenkontur ausrasiert']
    },
    {
      title: 'Bartpflege & Konturen',
      price: 'ab 15 €',
      time: '20 Min',
      desc: 'Formen des Bartes mit Trimmer & Rasiermesser-Finish inkl. Pflegeöl.',
      highlights: ['Schärfste Rasiermesser-Linien', 'Bartöl & Pflege', 'Schnurrbart-Trimming']
    },
    {
      title: 'VIP Kombo (Haar + Bart)',
      price: 'ab 34 €',
      time: '45 Min',
      desc: 'Das Komplettpaket: Haarschnitt, Bartgestaltung, Hot Towel & Styling.',
      highlights: ['Haarschnitt & Fade', 'Bart in Form bringen', 'Hot Towel Handtuch-Kompresse']
    },
    {
      title: 'Hot Towel Deluxe Rasur',
      price: 'ab 25 €',
      time: '30 Min',
      desc: 'Traditionelle Nassrasur mit warmer Kompresse & Gesichts-Kühlcreme.',
      highlights: ['Warme Kräuter-Kompresse', 'Klassischer Schaum', 'After-Shave Balsam']
    },
    {
      title: 'Kinderhaarschnitt (bis 12 J.)',
      price: 'ab 17 €',
      time: '25 Min',
      desc: 'Geduldige & trendige Haarschnitte für Kids & Jugendliche.',
      highlights: ['Freundlicher Service', 'Moderne Cut-Trends', 'Muster & Striche auf Wunsch']
    },
    {
      title: 'Gesichts-Waxing & Augenbrauen',
      price: 'ab 8 €',
      time: '15 Min',
      desc: 'Entfernung von Nasen-, Ohrenhaaren & Zupfen der Augenbrauen mit Faden.',
      highlights: ['Sanftes Ohr-/Nasenwaxing', 'Fadentechnik Augenbrauen', 'Glatte Konturen']
    }
  ];

  return (
    <section id="preise" className="py-20 bg-[#0f0d0c] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#1a1613] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
            Behandlungen & Preise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 text-balance">
            Barber-Handwerk & Preistabelle
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mt-4 text-pretty font-normal">
            Faire Preise, erstklassiger Service & entspannte Gentlemen-Atmosphäre in Horrem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#1a1613] border border-stone-800/80 rounded-3xl p-7 hover:border-[#d97736]/50 transition-all shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <h3 className="font-serif font-semibold text-xl text-white leading-snug">{s.title}</h3>
                  <span className="font-serif font-extrabold text-[#d97736] text-lg shrink-0 ml-2">{s.price}</span>
                </div>

                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest block">Dauer: {s.time}</span>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">{s.desc}</p>

                <ul className="space-y-2 text-xs text-stone-300 font-medium pt-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                aria-label={`Termin für ${s.title} buchen`}
                className="w-full bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <span>Termin Buchen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
