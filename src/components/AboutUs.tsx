import { Award, CheckCircle2, Scissors, MapPin } from 'lucide-react';
import studioImg from '../images/studio_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-24 bg-[#171412] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Studio Image Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src={studioImg}
                alt="Alyas Barbershop Horrem Studio Innenraum"
                className="w-full h-[500px] object-cover filter brightness-[0.9] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0c0a09] border border-stone-800 p-5 rounded-2xl shadow-2xl max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#171412] border border-[#d97736]/40 flex items-center justify-center text-[#d97736] shrink-0">
                  <Scissors className="w-5 h-5 text-[#d97736]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">Barber Handwerk</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Bahnhofstraße 14, Kerpen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#0c0a09] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
              Über Das Studio
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Ein Ort für echte <br />
              <span className="italic text-[#d97736]">Barber-Kultur & Stil</span>.
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
              Bei <strong className="text-white font-semibold">Alyas Barbershop</strong> in Kerpen-Horrem verbinden wir traditionelle Handwerkskunst mit zeitgemäßen Haartrends. Ob messerscharfer Skin Fade, gepflegter Vollbart oder eine ausgiebige Hot Towel Dampfrasur — wir nehmen uns Zeit für jeden Gast.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-stone-300">
              <div className="flex items-center gap-2.5 bg-[#0c0a09]/60 p-3.5 rounded-xl border border-stone-800/80">
                <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Walk-In ohne lange Wartezeiten</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0c0a09]/60 p-3.5 rounded-xl border border-stone-800/80">
                <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Rasiermesser-Finish auf den Millimeter</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0c0a09]/60 p-3.5 rounded-xl border border-stone-800/80">
                <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Premium Bartöle & Stylingpomaden</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0c0a09]/60 p-3.5 rounded-xl border border-stone-800/80">
                <CheckCircle2 className="w-4 h-4 text-[#d97736] shrink-0" />
                <span>Kostenloser Espresso & Erfrischung</span>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0c0a09] border border-stone-700 flex items-center justify-center text-[#d97736]">
                  <MapPin className="w-4 h-4 text-[#d97736]" />
                </div>
                <div>
                  <span className="font-serif font-bold text-white text-sm block">Bahnhofstraße 14</span>
                  <span className="text-xs text-stone-400 block">50169 Kerpen-Horrem</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-400 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Mo – Sa für Sie geöffnet</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
