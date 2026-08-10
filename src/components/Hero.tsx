import { Star, CheckCircle2, ShieldCheck, ArrowRight, Scissors, Clock } from 'lucide-react';
import heroImg from '../images/hero_barber.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f0d0c] border-b border-stone-800/80">
      
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#d97736]/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content Column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#1a1613] border border-[#d97736]/30 px-4 py-1.5 rounded-full shadow-sm w-fit mb-6">
            <div className="flex items-center gap-1 text-stone-200">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-stone-200 text-stone-200" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#d97736] tracking-wider uppercase">
              Exklusiver Herrenfriseur in Horrem
            </span>
          </div>

          {/* Headline - Outfit Display */}
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12] mb-6">
            Präzisions-Fades & <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#f0a673] via-[#d97736] to-[#a8521a]">Hot Towel Rasur</span>.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-stone-300 text-pretty mb-8 max-w-xl font-normal leading-relaxed">
            Willkommen bei <strong className="text-white font-semibold">Alyas Barbershop</strong> in Kerpen-Horrem. Wir bieten scharfe Skin Fades, exakte Rasiermesser-Konturen, wohltuende Hot Towel Rasuren & Männer-Grooming in entspannter Barbershop-Atmosphäre.
          </p>

          {/* Primary CTA + WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              aria-label="Wunschtermin buchen"
              className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <span>Termin Buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/491728987263?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20bei%20Alyas%20Barbershop%20Horrem%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1613] hover:bg-stone-800 text-stone-200 border border-stone-800 font-semibold text-base px-6 py-4 rounded-xl shadow-xs transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-stone-300 border-t border-stone-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
              <span>Ohne Termin / Walk-In</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
              <span>Rasiermesser-Kontur</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d97736] shrink-0" />
              <span>Hot Towel Entspannung</span>
            </div>
          </div>

        </div>

        {/* Right 50% Image Column */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full overflow-hidden bg-stone-950">
          <img
            src={heroImg}
            alt="Alyas Barbershop Horrem Meisterfeile & Schnitt"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-transparent to-transparent lg:hidden" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-[#0f0d0c]/95 backdrop-blur-md p-4 rounded-2xl border border-stone-800 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1613] text-[#d97736] flex items-center justify-center font-bold text-lg border border-[#d97736]/30 shrink-0">
                <Scissors className="w-5 h-5 text-[#d97736]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Bahnhofstraße 14</p>
                <p className="text-[11px] text-[#d97736] font-normal mt-0.5">50169 Kerpen-Horrem</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
