import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

    if (beardType === 'vollbart') base += 5;
    if (extraService === 'hottowel') base += 5;

    return base;
  };

  const estPrice = calculateEstimate();

  return (
    <section id="rechner" className="py-20 bg-[#0f0d0c] border-b border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#1a1613] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
            Style-Rechner
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-4">
            Wunsch-Paket & Preis Berechnen
          </h2>
          <p className="text-stone-300 text-sm mt-2 font-normal">
            Wählen Sie Ihren Haarschnitt, Bartpflege & Extra-Grooming – berechnen Sie in 15 Sekunden Ihren Paketpreis.
          </p>
        </div>

        <div className="bg-[#1a1613] border border-stone-800/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <span className="text-xs font-bold uppercase text-[#d97736] tracking-widest">Schritt {step} von 3</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${step >= i ? 'bg-[#d97736]' : 'bg-stone-800'}`} />
              ))}
            </div>
          </div>

          {/* Step 1: Schnitt */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-xl text-white">1. Welchen Haarschnitt wünschen Sie?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'fade', label: 'Skin Fade / Klassik Cut', sub: 'Präzisions-Haarschnitt (22 €)' },
                  { id: 'vip', label: 'VIP Kombo (Haar + Bart)', sub: 'Das Komplettpaket (34 €)' },
                  { id: 'kinder', label: 'Kinderhaarschnitt', sub: 'Bis 12 Jahre (17 €)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCutType(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      cutType === item.id 
                        ? 'bg-[#0f0d0c] border-[#d97736] shadow-md text-white' 
                        : 'bg-[#0f0d0c]/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 ml-auto uppercase tracking-wider cursor-pointer"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Bart */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-xl text-white">2. Wie soll Ihr Bart behandelt werden?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'kein', label: 'Kein Bart-Service', sub: 'Nur Haarschnitt' },
                  { id: 'kontur', label: 'Konturen & Messer-Finish', sub: 'Klassisches Ausrasieren' },
                  { id: 'vollbart', label: 'Vollbart Shaping & Pflege', sub: 'Inkl. Trimmer & Bartöl' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBeardType(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      beardType === item.id 
                        ? 'bg-[#0f0d0c] border-[#d97736] shadow-md text-white' 
                        : 'bg-[#0f0d0c]/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={() => setStep(1)} className="text-xs font-bold text-stone-400 hover:underline">Zurück</button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Extra */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-xl text-white">3. Wünschen Sie ein Extra-Grooming?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'ohne', label: 'Kein Extra', sub: 'Nur Standard' },
                  { id: 'hottowel', label: 'Hot Towel Kompresse', sub: 'Heiße Entspannung' },
                  { id: 'waxing', label: 'Gesichts- & Nasen-Waxing', sub: 'Ohren & Augenbrauen' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setExtraService(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      extraService === item.id 
                        ? 'bg-[#0f0d0c] border-[#d97736] shadow-md text-white' 
                        : 'bg-[#0f0d0c]/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>

              {/* Result Box */}
              <div className="bg-[#0f0d0c] text-white p-6 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                <div>
                  <span className="text-xs text-[#d97736] font-bold uppercase tracking-wider block">Ihr berechneter Paketpreis:</span>
                  <span className="font-serif font-extrabold text-3xl text-white">ca. {estPrice} €</span>
                  <span className="text-[11px] text-stone-400 block mt-1">Transparenter Festpreis • Inkl. Styling & Erfrischungsgetränk</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md uppercase tracking-wider cursor-pointer"
                >
                  Paket Buchen
                </button>
              </div>

              <button onClick={() => setStep(2)} className="text-xs font-bold text-stone-400 hover:underline">Zurück zu Schritt 2</button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
