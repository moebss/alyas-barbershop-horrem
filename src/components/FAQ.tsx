import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kann ich einfach spontan ohne Termin bei Alyas Barbershop vorbeikommen?',
      a: 'Ja, absolut! Wir bedienen Sie auch gerne spontan ohne Termin (Walk-In). Wer Wartezeiten vermeiden möchte, kann alternativ online oder telefonisch (02273 9919005) reservieren.'
    },
    {
      q: 'Wo befindet sich Alyas Barbershop in Kerpen-Horrem?',
      a: 'Sie finden uns zentral gelegen an der Bahnhofstraße 14 in 50169 Kerpen-Horrem, bequem erreichbar vom Bahnhof & den umliegenden Parkmöglichkeiten.'
    },
    {
      q: 'Was ist in einer Hot Towel Rasur enthalten?',
      a: 'Bei der Hot Towel Rasur bereiten wir Ihre Haut mit einer angenehm heißen Kräuter-Kompresse vor, tragen dichten Schaum auf, rasieren mit dem Rasiermesser und schließen mit einer kühlenden Lotion ab.'
    },
    {
      q: 'Bietet ihr auch Kinderhaarschnitte an?',
      a: 'Ja! Wir schneiden Haare für Kinder jeden Alters geduldig und mit modernen Cut-Trends (ab 17 €).'
    },
    {
      q: 'Welche Zahlungsmöglichkeiten gibt es vor Ort?',
      a: 'Sie können bei uns bequem in bar oder mit EC-Karte / Kontaktlos (Apple Pay) bezahlen.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#1a1613] border-b border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#0f0d0c] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
            Häufige Fragen
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Fragen & Antworten (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0f0d0c] border border-stone-800 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between font-outfit font-bold text-white text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#d97736] transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-stone-300 leading-relaxed font-normal border-t border-stone-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
