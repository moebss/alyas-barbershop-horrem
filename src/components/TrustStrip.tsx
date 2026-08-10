import { Shield, Clock, MapPin, Scissors } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-[#1a1613] border-b border-stone-800/80 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center gap-1.5">
          <MapPin className="w-5 h-5 text-stone-300" />
          <span className="text-xs font-bold text-white">Bahnhofstraße 14</span>
          <span className="text-[11px] text-stone-400">50169 Kerpen-Horrem</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Clock className="w-5 h-5 text-stone-300" />
          <span className="text-xs font-bold text-white">Mo – Fr: 09:15 – 20:00 Uhr</span>
          <span className="text-[11px] text-stone-400">Sa: 09:00 – 19:30 Uhr</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Scissors className="w-5 h-5 text-stone-300" />
          <span className="text-xs font-bold text-white">Walk-In & Termin</span>
          <span className="text-[11px] text-stone-400">Einfach vorbeikommen</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Shield className="w-5 h-5 text-stone-300" />
          <span className="text-xs font-bold text-white">Hot Towel Service</span>
          <span className="text-[11px] text-stone-400">Grooming & Erholung</span>
        </div>

      </div>
    </div>
  );
}
