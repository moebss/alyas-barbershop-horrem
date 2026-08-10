export default function Footer() {
  return (
    <footer className="bg-[#0f0d0c] text-stone-300 py-12 px-4 sm:px-8 border-t border-stone-800/80 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <span className="font-outfit font-bold text-lg text-white block">Alyas Barbershop</span>
          <p className="text-stone-400 leading-relaxed text-[11px]">
            Exklusiver Herrenfriseur & Barbershop in Kerpen-Horrem. Präzisions-Fades, Bartpflege & Hot Towel Service.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Behandlungen</span>
          <ul className="space-y-1 text-stone-400">
            <li>Herrenhaarschnitt & Skin Fade</li>
            <li>Bartpflege & Rasiermesser-Linien</li>
            <li>VIP Kombo (Haar + Bart)</li>
            <li>Hot Towel Deluxe Rasur</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Kontakt & Öffnungszeiten</span>
          <p className="text-stone-400">Bahnhofstraße 14, 50169 Kerpen-Horrem</p>
          <p className="text-stone-400">Tel: 02273 9919005</p>
          <p className="text-stone-400">Mo – Fr: 09:15 – 20:00 Uhr | Sa: 09:00 – 19:30</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Rechtliches</span>
          <ul className="space-y-1 text-stone-400">
            <li><a href="#kontakt" className="hover:text-white">Impressum</a></li>
            <li><a href="#kontakt" className="hover:text-white">Datenschutzerklärung</a></li>
            <li><a href="#kontakt" className="hover:text-white">Cookie-Einstellungen</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-800/80 pt-6 text-center text-stone-500 text-[11px]">
        © {new Date().getFullYear()} Alyas Barbershop Horrem • Umgesetzt mit Rheindorf Digital WebGen OS
      </div>
    </footer>
  );
}
