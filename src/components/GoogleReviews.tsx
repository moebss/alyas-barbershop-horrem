import { Star, CheckCircle } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: 'Dennis K.',
      time: 'vor 2 Wochen',
      rating: 5,
      text: 'Seit Jahren der beste Barbershop in Kerpen-Horrem! Skin Fade ist immer absolut perfekt auf den Millimeter. Super freundliches Team und leckerer Espresso inklusive.',
      verified: true
    },
    {
      name: 'Michael B.',
      time: 'vor 1 Monat',
      rating: 5,
      text: 'Top Service! Rasur mit Rasiermesser und Hot Towel wie im Kururlaub. Man kommt pünktlich dran und das Ergebnis überzeugt jedes Mal.',
      verified: true
    },
    {
      name: 'Alexander R.',
      time: 'vor 3 Wochen',
      rating: 5,
      text: 'Sehr sauberes Studio, entspannte Stimmung und extrem präzise Arbeit beim Bartkonturenschneiden. Absolut empfehlenswert in Horrem!',
      verified: true
    },
    {
      name: 'Markus S.',
      time: 'vor 2 Monaten',
      rating: 5,
      text: 'Gehe hier auch regelmäßig mit meinem Sohn hin. Die Jungs sind super geduldig mit Kindern und das Ergebnis sieht einfach klasse aus.',
      verified: true
    }
  ];

  return (
    <section id="bewertungen" className="py-20 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#171412] border border-stone-800 px-4 py-1.5 rounded-full">
            <span className="text-[#d97736] font-bold text-sm">G</span>
            <span className="text-xs font-semibold text-stone-300 uppercase tracking-widest">Google Rezensionen</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Kundenstimmen & Erfahrungen
          </h2>

          <div className="flex items-center justify-center gap-2 text-stone-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d97736] text-[#d97736]" />
              ))}
            </div>
            <span className="font-bold text-white text-lg ml-1">4.9 / 5.0</span>
            <span className="text-xs text-stone-400">(über 120+ Google Rezensionen)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-[#171412] border border-stone-800/90 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-stone-700 transition-colors shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#29231f] border border-stone-700 text-[#d97736] font-bold flex items-center justify-center text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm block">{r.name}</span>
                      <span className="text-[10px] text-stone-400 block">{r.time}</span>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verifiziert</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d97736] text-[#d97736]" />
                  ))}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed italic font-normal">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Alyas+Barbershop+Horrem+Bahnhofstraße+14+50169+Kerpen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-white transition-colors border-b border-stone-700 pb-0.5"
          >
            <span>Alle Google Bewertungen für Alyas Barbershop ansehen</span>
          </a>
        </div>

      </div>
    </section>
  );
}
