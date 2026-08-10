import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import heroImg from '../images/hero_barber.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';
import studioImg from '../images/studio_interior.jpg';

interface PortfolioGalleryProps {
  onOpenContact: () => void;
}

export default function PortfolioGallery({ onOpenContact }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      title: 'Skin Fade & Razor Line',
      category: 'fade',
      img: gallery1,
      tag: 'Skin Fade',
      desc: 'Messerscharfer Übergang von 0mm mit präziser Nackenkontur.'
    },
    {
      title: 'Hot Towel & Bart Rasur',
      category: 'bart',
      img: gallery2,
      tag: 'Bartpflege',
      desc: 'Traditionelles Rasiermesser-Finish & heiße Kompresse.'
    },
    {
      title: 'Gentlemen Cut & Styling',
      category: 'fade',
      img: heroImg,
      tag: 'Gentlemen Cut',
      desc: 'Klassischer Herrenhaarschnitt mit mattem Pomade-Finish.'
    },
    {
      title: 'Barber Lounge Ambiente',
      category: 'lounge',
      img: studioImg,
      tag: 'Ambiente',
      desc: 'Erholung & Handwerk im Herzen von Horrem.'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <section id="galerie-grid" className="py-20 bg-[#0f0d0c] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#1a1613] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
            Portfolio & Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-4">
            Echte Schnitte aus Unserem Barbershop
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 font-normal">
            Lassen Sie sich von unseren aktuellen Schnitten & Bart-Refinements überzeugen.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Alle Schnitte' },
              { id: 'fade', label: 'Fades & Cuts' },
              { id: 'bart', label: 'Bart & Rasur' },
              { id: 'lounge', label: 'Studio & Lounge' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#d97736] text-stone-950 shadow-md'
                    : 'bg-[#1a1613] text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-[#1a1613] border border-stone-800/80 rounded-3xl overflow-hidden shadow-xl hover:border-[#d97736]/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <span className="absolute top-3 right-3 bg-[#0f0d0c]/90 text-[#d97736] border border-[#d97736]/30 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-lg text-white">{item.title}</h3>
                  <p className="text-xs text-stone-400 font-normal leading-relaxed mt-1">{item.desc}</p>
                </div>

                <button
                  onClick={onOpenContact}
                  className="mt-4 w-full bg-[#d97736] hover:bg-[#c26527] text-stone-950 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>Termin Buchen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
