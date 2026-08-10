import { Scissors, Award, CheckCircle2 } from 'lucide-react';
import studioImg from '../images/studio_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-20 bg-[#1a1613] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Studio Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src={studioImg}
                alt="Alyas Barbershop Horrem Innenraum Ambiente"
                className="w-full h-[450px] object-cover filter brightness-95"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0f0d0c] text-white p-5 rounded-2xl border border-stone-800 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#d97736] shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d97736]">Barber Handwerk</p>
                  <p className="text-[11px] text-stone-300 font-normal mt-0.5">Bahnhofstraße 14 in Kerpen-Horrem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#0f0d0c] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
              Über Das Studio
            </span>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Echte Handwerkskunst für Ihren <span className="italic font-normal text-[#d97736]">perfekten Cut</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
              Bei <strong className="text-white font-semibold">Alyas Barbershop</strong> in Horrem steht der Mann im Mittelpunkt. Egal ob messerscharfer Fade, klassische Bartpflege oder wohltuendes Hot Towel Verwöhnprogramm – wir nehmen uns Zeit für jeden Kunden.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-stone-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                <span>Ohne lange Wartezeiten / Walk-In Service</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                <span>Präzise Rasiermesser-Linienführung</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                <span>Hochwertige Bartöle & Styling-Pomaden</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                <span>Zentral gelegen an der Bahnhofstraße 14</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f0d0c] border border-stone-800 flex items-center justify-center font-bold text-[#d97736] text-xl">
                <Scissors className="w-6 h-6 text-[#d97736]" />
              </div>
              <div>
                <span className="font-outfit font-bold text-white text-base block">Team Alyas Barbershop</span>
                <span className="text-xs text-stone-400 block">Bahnhofstraße 14, 50169 Kerpen-Horrem</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
