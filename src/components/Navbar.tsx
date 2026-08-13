import { useState } from 'react';
import { Phone, Calendar, Scissors, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f0d0c]/95 backdrop-blur-md border-b border-stone-800/80 py-3.5 px-4 sm:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#1a1613] border border-[#d97736]/40 flex items-center justify-center text-[#d97736] font-bold text-lg shadow-sm shrink-0">
            <Scissors className="w-5 h-5 text-[#d97736]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-white block leading-none">Alyas Barbershop</span>
            <span className="text-[10px] font-semibold text-[#d97736] tracking-widest uppercase block mt-1">Gentlemen's Cut • Horrem</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-300 uppercase tracking-wider">
          <a href="#preise" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Preise & Services</a>
          <a href="#ueber-uns" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Über Uns</a>
          <a href="#transformation" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Vorher / Nachher</a>
          <a href="#faq" className="hover:text-[#d97736] transition-colors whitespace-nowrap">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:022739919005"
            aria-label="Anrufen bei Alyas Barbershop Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-200 bg-[#1a1613] hover:bg-stone-800 border border-stone-800 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#d97736]" />
            <span>02273 9919005</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei Alyas Barbershop buchen"
            className="hidden sm:flex bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all items-center gap-2 cursor-pointer uppercase tracking-wider whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Buchen</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="lg:hidden p-2 rounded-xl bg-[#1a1613] border border-stone-800 text-stone-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f0d0c] border-b border-stone-800 px-4 py-6 space-y-4 font-semibold text-sm uppercase tracking-wider text-stone-200">
          <a
            href="#preise"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#d97736]"
          >
            Preise & Services
          </a>
          <a
            href="#ueber-uns"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#d97736]"
          >
            Über Uns
          </a>
          <a
            href="#transformation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#d97736]"
          >
            Vorher / Nachher
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#d97736]"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-[#d97736] text-stone-950 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider text-center"
            >
              Termin Buchen
            </button>

            <a
              href="tel:022739919005"
              className="w-full bg-[#1a1613] border border-stone-800 text-stone-200 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d97736]" />
              <span>02273 9919005</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
