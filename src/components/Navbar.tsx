import { useState } from 'react';
import { Phone, Calendar, Scissors, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/92 backdrop-blur-md border-b border-stone-800/80 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-[#171412] border border-[#d97736]/40 flex items-center justify-center text-[#d97736] font-bold text-lg shadow-sm shrink-0 group-hover:border-[#d97736] transition-colors">
            <Scissors className="w-5 h-5 text-[#d97736]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-white block leading-none group-hover:text-[#d97736] transition-colors">
              Alyas Barbershop
            </span>
            <span className="text-[10px] font-semibold text-[#d97736] tracking-widest uppercase block mt-1">
              Gentlemen's Cut • Horrem
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on XL screens to prevent tablet squeeze) */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-stone-300 uppercase tracking-wider">
          <a href="#services" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Preise & Services</a>
          <a href="#ueber-uns" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Über Uns</a>
          <a href="#transformation" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Vorher / Nachher</a>
          <a href="#bewertungen" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Bewertungen</a>
          <a href="#rechner" className="hover:text-[#d97736] transition-colors whitespace-nowrap">Style-Rechner</a>
          <a href="#faq" className="hover:text-[#d97736] transition-colors whitespace-nowrap">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile/Tablet Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="tel:022739919005"
            aria-label="Anrufen bei Alyas Barbershop Horrem"
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-stone-200 bg-[#171412] hover:bg-stone-900 border border-stone-800 px-3.5 py-2.5 rounded-xl transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#d97736]" />
            <span>02273 9919005</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei Alyas Barbershop buchen"
            className="hidden sm:flex bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs px-5 sm:px-6 py-2.5 rounded-xl shadow-md transition-all items-center gap-2 cursor-pointer uppercase tracking-wider whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Buchen</span>
          </button>

          {/* Mobile & Tablet Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="xl:hidden p-2.5 rounded-xl bg-[#171412] border border-stone-800 text-stone-200 hover:text-white cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c0a09] border-t border-stone-800 px-4 py-6 space-y-4 font-semibold text-sm uppercase tracking-wider text-stone-200 mt-3 animate-in fade-in slide-in-from-top-2 shadow-2xl rounded-b-2xl">
          <a
            href="#services"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            Preise & Services
          </a>
          <a
            href="#ueber-uns"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            Über Uns
          </a>
          <a
            href="#transformation"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            Vorher / Nachher
          </a>
          <a
            href="#bewertungen"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            Bewertungen
          </a>
          <a
            href="#rechner"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            Style-Rechner
          </a>
          <a
            href="#faq"
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-xl hover:bg-[#171412] hover:text-[#d97736] transition-colors"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href="tel:022739919005"
              className="md:hidden w-full bg-[#171412] text-stone-200 border border-stone-800 font-semibold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d97736]" />
              <span>02273 9919005</span>
            </a>

            <button
              onClick={() => {
                handleNavClick();
                onOpenContact();
              }}
              className="w-full bg-[#d97736] text-stone-950 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Termin Buchen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
