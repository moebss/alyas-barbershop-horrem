import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Mobile Schnellzugriff Leiste"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0f0d0c]/95 backdrop-blur-md border-t border-stone-800/90 p-3 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* Call Button */}
        <a
          href="tel:022739919005"
          className="bg-[#1a1613] active:bg-stone-800 border border-stone-800 text-stone-200 py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#d97736]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Anrufen</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/491728987263?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20bei%20Alyas%20Barbershop%20Horrem%20vereinbaren."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 active:bg-emerald-700 text-white py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Termin Buchen */}
        <button
          onClick={onOpenContact}
          className="bg-[#d97736] active:bg-[#c26527] text-stone-950 py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md font-bold"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Termin</span>
        </button>

      </div>
    </aside>
  );
}
