interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#0c0a09] text-stone-300 py-14 px-4 sm:px-8 border-t border-stone-800/80 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <span className="font-serif font-bold text-lg text-white block">Alyas Barbershop</span>
          <p className="text-stone-400 leading-relaxed text-xs">
            Exklusiver Herrenfriseur & Barbershop in Kerpen-Horrem. Präzisions-Skin Fades, meisterhafte Bartpflege & traditioneller Hot Towel Service.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Leistungen</span>
          <ul className="space-y-1.5 text-stone-400">
            <li>Herrenhaarschnitt & Skin Fade</li>
            <li>Bartpflege & Rasiermesser-Konturen</li>
            <li>VIP Kombo (Haar + Bart + Hot Towel)</li>
            <li>Hot Towel Deluxe Rasur</li>
            <li>Kinderhaarschnitt (bis 12 J.)</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Standort & Zeiten</span>
          <p className="text-stone-400">Bahnhofstraße 14, 50169 Kerpen-Horrem</p>
          <p className="text-stone-400">Tel: <a href="tel:022739919005" className="text-stone-300 hover:text-white underline">02273 9919005</a></p>
          <p className="text-stone-400">Mo – Fr: 09:15 – 20:00 Uhr<br />Sa: 09:00 – 19:30 Uhr</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Rechtliches</span>
          <ul className="space-y-1.5 text-stone-400">
            <li>
              <button 
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-white cursor-pointer transition-colors underline"
              >
                Impressum
              </button>
            </li>
            <li>
              <button 
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-white cursor-pointer transition-colors underline"
              >
                Datenschutzerklärung
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
        <div>
          © {new Date().getFullYear()} Alyas Barbershop Horrem. Alle Rechte vorbehalten.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-stone-400">Bahnhofstraße 14 • 50169 Kerpen</span>
        </div>
      </div>
    </footer>
  );
}
