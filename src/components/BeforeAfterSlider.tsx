import { useState } from 'react';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformation" className="py-20 bg-[#171412] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#0c0a09] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full inline-block">
            Barber-Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            Präzisions-Ergebnisse & Fade-Vergleich
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal">
            Ziehen Sie den Regler für den direkten Vorher-/Nachher-Vergleich unserer Skin Fades & Bartkonturen.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
          
          {/* After Image (Right Side) */}
          <img
            src={gallery1}
            alt="Nachher: Perfekter Skin Fade und Bartkontur"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-[#d97736] text-stone-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider">
            Nachher: Perfekter Fade
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={gallery2}
              alt="Vorher: Ausgangszustand"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-stone-900/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider border border-stone-700">
              Vorher: Schnittvergleich
            </span>
          </div>

          {/* Slider Handle Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#d97736] cursor-ew-resize z-20 shadow-xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#d97736] text-stone-950 border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl">
              ↔
            </div>
          </div>

          {/* Invisible Range Input Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Vorher Nachher Slider"
          />
        </div>

      </div>
    </section>
  );
}
