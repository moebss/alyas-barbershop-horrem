import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [cutType, setCutType] = useState('fade');
  const [beardType, setBeardType] = useState('kontur');
  const [extraService, setExtraService] = useState('hottowel');

  const calculateEstimate = () => {
    let base = 22;
    if (cutType === 'vip') base = 34;
    if (cutType === 'kinder') base = 17;

    if (cutType !== 'vip') {
      if (beardType === 'kontur') base += 15;
      if (beardType === 'vollbart') base += 18;
      if (extraService === 'hottowel') base += 10;
      if (extraService === 'waxing') base += 8;
    }

    return base;
  };

  const estPrice = calculateEstimate();

  return (
    <section id="rechner" className="py-24 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#171412] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
            Interaktiver Style-Rechner
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Wunsch-Paket & Preis Konfigurieren
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Wählen Sie Haarschnitt, Bartpflege und Extras — in 3 einfachen Schritten zum transparenten Paketpreis.
          </p>
        </div>

        <div className="bg-[#171412] border border-stone-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Step Bar */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <span className="text-xs font-bold uppercase text-[#d97736] tracking-widest">
              Schritt {step} von 3
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    step === i ? 'w-8 bg-[#d97736]' : step > i ? 'w-4 bg-stone-600' : 'w-2 bg-stone-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Haarschnitt */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-normal text-2xl text-white">1. Welcher Haarschnitt soll es sein?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'fade', label: 'Herrenhaarschnitt & Fade', desc: 'Skin Fade, Waschen & Styling (22 €)' },
                  { id: 'vip', label: 'VIP Kombo Deluxe', desc: 'Haarschnitt, Bart & Hot Towel (34 €)' },
                  { id: 'kinder', label: 'Kinderhaarschnitt', desc: 'Bis 12 Jahre (17 €)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCutType(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      cutType === item.id 
                        ? 'bg-[#0c0a09] border-[#d97736] shadow-lg text-white ring-1 ring-[#d97736]' 
                        : 'bg-[#0c0a09]/50 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-serif font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-8 py-4 rounded-xl flex items-center gap-2 ml-auto uppercase tracking-wider cursor-pointer shadow-md transition-colors"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Bart */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif font-normal text-2xl text-white">2. Wie soll Ihr Bart behandelt werden?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'kein', label: 'Kein Bart-Service', desc: 'Nur Haarschnitt / Bereits im Paket' },
                  { id: 'kontur', label: 'Konturen & Messer-Finish', desc: 'Exaktes Ausrasieren (+15 €)' },
                  { id: 'vollbart', label: 'Vollbart Shaping & Pflege', desc: 'Trimmer, Messer & Bartöl (+18 €)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBeardType(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      beardType === item.id 
                        ? 'bg-[#0c0a09] border-[#d97736] shadow-lg text-white ring-1 ring-[#d97736]' 
                        : 'bg-[#0c0a09]/50 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-serif font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-stone-400 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-8 py-4 rounded-xl flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-md transition-colors"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Extras & Ergebnis */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif font-normal text-2xl text-white">3. Möchten Sie ein Verwöhn-Extra?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'kein', label: 'Kein Extra', desc: 'Standard-Behandlung' },
                  { id: 'hottowel', label: 'Hot Towel Kräuterkompresse', desc: 'Entspannung pur (+10 €)' },
                  { id: 'waxing', label: 'Face Waxing & Augenbrauen', desc: 'Ohr, Nase, Kontur (+8 €)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setExtraService(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      extraService === item.id 
                        ? 'bg-[#0c0a09] border-[#d97736] shadow-lg text-white ring-1 ring-[#d97736]' 
                        : 'bg-[#0c0a09]/50 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-serif font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>

              {/* Price Calculation Box */}
              <div className="bg-[#0c0a09] border border-[#d97736]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest block">Geschätzter Gesamtpreis:</span>
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white block mt-1">
                    ca. <span className="text-[#d97736]">{estPrice} €</span>
                  </span>
                  <span className="text-[11px] text-stone-400 mt-1 block">inkl. MwSt. • Vor Ort in bar oder per Karte zahlbar</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Wunschtermin jetzt Anfragen</span>
                </button>
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-stone-400 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer block"
              >
                Zurück zu Schritt 2
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
