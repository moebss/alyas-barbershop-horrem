import { Scissors, Clock, ArrowRight, Sparkles } from 'lucide-react';
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
  return (
    <section id="services" className="py-24 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#171412] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
              Leistungen & Preistransparenz
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight">
              Klassisches Handwerk & <br />
              <span className="italic text-[#d97736]">Moderne Cuts</span>.
            </h2>
            <p className="text-stone-300 text-base leading-relaxed">
              Jeder Haarschnitt und jede Rasur wird bei uns individuell auf Ihre Kopfform und Ihren Bartwuchs abgestimmt.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="hidden md:flex bg-[#171412] hover:bg-[#221e1a] text-white border border-stone-800 hover:border-[#d97736]/40 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl items-center gap-2 transition-all cursor-pointer shrink-0"
          >
            <span>Termin Anfragen</span>
            <ArrowRight className="w-4 h-4 text-[#d97736]" />
          </button>
        </div>

        {/* Asymmetric Bento-Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Large Featured VIP Card (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 group relative bg-[#171412] border border-stone-800/90 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-[#d97736]/40 transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              {/* Photo */}
              <div className="relative min-h-[260px] sm:min-h-full overflow-hidden">
                <img
                  src={imgVip}
                  alt="VIP Komplettpaket Alyas Barbershop"
                  className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#d97736] text-stone-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  <span>Beliebtestes Paket</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#d97736]" />
                      <span>ca. 45 Min</span>
                    </span>
                    <span className="font-serif text-3xl font-bold text-[#d97736]">34 €</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                    VIP Kombo Deluxe
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Das Rundum-Sorglos-Paket: Präzisions-Haarschnitt mit Skin Fade, Bartgestaltung mit Rasiermesser-Finish, wohltuende Hot Towel Kräuterkompresse & After-Shave Pflege.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80">
                  <button
                    onClick={onOpenContact}
                    className="w-full bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                  >
                    <span>VIP Paket Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Herrenhaarschnitt & Fade */}
          <div className="group bg-[#171412] border border-stone-800/90 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-stone-700 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={imgCut}
                alt="Herrenhaarschnitt & Fade"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 right-3 bg-[#0c0a09]/90 backdrop-blur-md border border-stone-700 px-3.5 py-1 rounded-xl">
                <span className="font-serif font-bold text-[#d97736] text-lg">ab 22 €</span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d97736]" /> 30 Min
              </span>
              <h3 className="font-serif text-xl font-normal text-white">Herrenhaarschnitt & Fade</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Präziser Schnitt nach Wunsch (Skin Fade, Classic Cut, Taper), Waschen & individuelles Styling.
              </p>
            </div>
          </div>

          {/* Card 3: Bartpflege & Konturen */}
          <div className="group bg-[#171412] border border-stone-800/90 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-stone-700 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={imgBeard}
                alt="Bartpflege & Konturen"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 right-3 bg-[#0c0a09]/90 backdrop-blur-md border border-stone-700 px-3.5 py-1 rounded-xl">
                <span className="font-serif font-bold text-[#d97736] text-lg">ab 15 €</span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d97736]" /> 20 Min
              </span>
              <h3 className="font-serif text-xl font-normal text-white">Bartpflege & Konturen</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Formen des Bartes mit Trimmer, exakte Rasiermesser-Linien an Wange und Hals & Bartöl-Finish.
              </p>
            </div>
          </div>

          {/* Card 4: Hot Towel Deluxe Rasur */}
          <div className="group bg-[#171412] border border-stone-800/90 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-stone-700 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={imgHotTowel}
                alt="Hot Towel Deluxe Rasur"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 right-3 bg-[#0c0a09]/90 backdrop-blur-md border border-stone-700 px-3.5 py-1 rounded-xl">
                <span className="font-serif font-bold text-[#d97736] text-lg">ab 25 €</span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d97736]" /> 30 Min
              </span>
              <h3 className="font-serif text-xl font-normal text-white">Hot Towel Deluxe Rasur</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Klassische Nassrasur mit heißer Kräuter-Dampfkompresse, Schaum & beruhigendem After-Shave Balsam.
              </p>
            </div>
          </div>

          {/* Card 5: Kinderhaarschnitt & Waxing Mini-Split */}
          <div className="group bg-[#171412] border border-stone-800/90 rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-stone-700 transition-all duration-300 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
                <img src={imgKids} alt="Kinderhaarschnitt" className="w-14 h-14 rounded-2xl object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-semibold text-white text-base">Kinderhaarschnitt</h4>
                    <span className="font-serif font-bold text-[#d97736] text-sm">17 €</span>
                  </div>
                  <p className="text-stone-400 text-xs mt-0.5">Bis 12 Jahre • Geduldig & trendig</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src={imgWaxing} alt="Gesichts-Waxing" className="w-14 h-14 rounded-2xl object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-semibold text-white text-base">Face Waxing & Faden</h4>
                    <span className="font-serif font-bold text-[#d97736] text-sm">ab 8 €</span>
                  </div>
                  <p className="text-stone-400 text-xs mt-0.5">Ohren, Nase & Augenbrauen mit Fadentechnik</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0a09] p-4 rounded-2xl border border-stone-800/80 text-center">
              <p className="text-xs text-stone-300 font-medium">
                ✂️ Alle Behandlungen auch ohne Termin als <strong>Walk-In</strong> verfügbar.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
