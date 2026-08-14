import { ArrowRight, Phone, Star, MapPin, Scissors, Sparkles, ChevronDown } from 'lucide-react';
import heroImg from '../images/hero_barber.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0a09] pt-20 pb-16 lg:py-0 border-b border-stone-800/80">
      
      {/* 100vh Full Bleed SpaceX-Style Photography with Deep Film Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Alyas Barbershop Kerpen-Horrem Ambiente"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] scale-105"
        />
        {/* Warm Ambient Bronze Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/75 to-[#0c0a09]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d97736]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-8 pt-12">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#171412]/90 border border-[#d97736]/40 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#d97736] backdrop-blur-md shadow-lg">
          <Scissors className="w-3.5 h-3.5 text-[#d97736]" />
          <span>MEISTER-BARBERSHOP • BAHNHOFSTRASSE 14 • KERPEN-HORREM</span>
        </div>

        {/* Massive Fraunces Display Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05] max-w-5xl mx-auto">
          Präzisions-Fades & <br />
          <span className="italic text-[#d97736]">Hot Towel Rasur</span>.
        </h1>

        {/* Atmospheric Subtitle */}
        <p className="text-stone-300 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
          Echtes Barbershop-Handwerk für den modernen Gentleman. Scharfe Übergänge, exakte Rasiermesser-Linien & traditionelle Pflege in entspannter Atmosphäre.
        </p>

        {/* Single Confident Primary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            aria-label="Wunschtermin anfragen"
            className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-[0_8px_30px_rgba(217,119,54,0.35)] transition-all transform active:scale-98 flex items-center gap-3 cursor-pointer group uppercase tracking-wider"
          >
            <span>Termin Anfragen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:022739919005"
            className="bg-[#171412]/90 hover:bg-[#221e1a] text-white font-semibold text-base sm:text-lg px-7 py-4 sm:py-5 rounded-xl border border-stone-800 hover:border-[#d97736]/40 backdrop-blur-md transition-all flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#d97736]" />
            <span className="tabular-nums">02273 9919005</span>
          </a>

          <a
            href="https://wa.me/491728987263?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20bei%20Alyas%20Barbershop%20Horrem%20vereinbaren."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171412]/90 hover:bg-[#221e1a] text-stone-300 hover:text-white font-semibold text-base sm:text-lg px-6 py-4 sm:py-5 rounded-xl border border-stone-800 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#d97736]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* High-Impact Metric Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-stone-800/80 max-w-4xl mx-auto">
          <div className="bg-[#171412]/70 backdrop-blur-sm p-4 rounded-2xl border border-stone-800/90">
            <div className="flex items-center justify-center gap-1 text-[#d97736] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d97736]" />
              ))}
            </div>
            <span className="font-serif text-2xl font-bold text-white block">4.9 / 5.0</span>
            <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">120+ Bewertungen</span>
          </div>

          <div className="bg-[#171412]/70 backdrop-blur-sm p-4 rounded-2xl border border-stone-800/90">
            <span className="font-serif text-2xl font-bold text-white block text-[#d97736]">Walk-In</span>
            <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Ohne Termin möglich</span>
          </div>

          <div className="bg-[#171412]/70 backdrop-blur-sm p-4 rounded-2xl border border-stone-800/90">
            <span className="font-serif text-2xl font-bold text-white block">Bis 20:00 Uhr</span>
            <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Mo – Fr geöffnet</span>
          </div>

          <div className="bg-[#171412]/70 backdrop-blur-sm p-4 rounded-2xl border border-stone-800/90">
            <span className="font-serif text-2xl font-bold text-white block flex items-center justify-center gap-1 text-stone-200">
              <MapPin className="w-4 h-4 text-[#d97736]" />
              <span>Horrem</span>
            </span>
            <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Bahnhofstraße 14</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="pt-6 inline-flex flex-col items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Nach unten scrollen"
        >
          <span className="text-[10px] uppercase tracking-widest">Services entdecken</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d97736]" />
        </button>

      </div>
    </section>
  );
}
