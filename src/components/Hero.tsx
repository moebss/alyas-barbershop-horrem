import { Star, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Play } from 'lucide-react';
import heroImg from '../images/hero_barber.jpg';
import barberVideo from '../images/hero_barber_loop.mp4';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden bg-[#0f0d0c] border-b border-stone-800/80 py-12 lg:py-20">
      
      {/* Full Bleed Cinematic Background Video & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Video Loop (Silent) */}
        <video
          src={barberVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-110 scale-105"
        />

        {/* Micro-Motion Warm Bronze Ambient Glow Pulse */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#d97736]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

        {/* Signature Barber Pole Micro-Motion Light Effect */}
        <div 
          className="absolute -top-32 right-12 w-28 h-[140%] opacity-20 pointer-events-none blur-sm transform rotate-12"
          style={{
            background: 'repeating-linear-gradient(45deg, #d97736, #d97736 20px, #ffffff 20px, #ffffff 40px, #1a1613 40px, #1a1613 60px)',
            backgroundSize: '200% 200%',
            animation: 'barberPole 12s linear infinite'
          }}
        />

        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0c] via-[#0f0d0c]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-transparent to-[#0f0d0c]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action Box */}
          <div className="lg:col-span-7 bg-[#0f0d0c]/90 backdrop-blur-xl border border-stone-800/90 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#1a1613] border border-[#d97736]/40 px-4 py-1.5 rounded-full shadow-sm">
              <div className="flex items-center gap-1 text-stone-200">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-stone-200 text-stone-200" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#d97736] tracking-wider uppercase flex items-center gap-1.5">
                <span>Exklusiver Herrenfriseur in Horrem</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>

            {/* Headline - Fraunces Serif Display */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal tracking-tight text-white leading-[1.1]">
              Präzisions-Fades & <span className="italic text-[#d97736]">Hot Towel Rasur</span>.
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
              Willkommen bei <strong className="text-white font-semibold">Alyas Barbershop</strong> in Kerpen-Horrem. Wir bieten scharfe Skin Fades, exakte Rasiermesser-Konturen, wohltuende Hot Towel Rasuren & Männer-Grooming in entspannter Barbershop-Atmosphäre.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                aria-label="Wunschtermin buchen"
                className="bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
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

            {/* Location & Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-stone-300 border-t border-stone-800/80 pt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Bahnhofstraße 14</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Walk-In ohne Termin</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Hot Towel Service</span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Video Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-[#1a1613] shadow-2xl transition-all duration-500 group-hover:border-[#d97736]/50">
              
              {/* Video Loop Element */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <video
                  src={barberVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={heroImg}
                  className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-transparent to-black/30" />

                {/* Top Badge: Live Atmosphere */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#0f0d0c]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-700/60">
                  <span className="w-2 h-2 rounded-full bg-[#d97736] animate-ping" />
                  <span className="text-xs font-bold text-stone-200 tracking-wider uppercase">Atmosphäre in Action</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f0d0c]/90 backdrop-blur-md p-4 rounded-2xl border border-stone-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-[#d97736] uppercase tracking-wider">Alyas Barbershop Studio</p>
                    <p className="text-sm font-semibold text-white">Echte Handwerkskunst in Horrem</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#d97736]/20 border border-[#d97736]/50 flex items-center justify-center text-[#d97736]">
                    <Play className="w-4 h-4 fill-[#d97736]" />
                  </div>
                </div>

              </div>

            </div>

            {/* Glowing Accent Effect behind Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d97736]/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>

        </div>
      </div>

      {/* Keyframe Animation for Barber Pole */}
      <style>{`
        @keyframes barberPole {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
      `}</style>

    </section>
  );
}

