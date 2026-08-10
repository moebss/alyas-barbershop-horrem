import { useState } from 'react';
import gallery1 from '../images/gallery_1.jpg';
import studioImg from '../images/studio_interior.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformation" className="py-20 bg-[#1a1613] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#d97736] uppercase bg-[#0f0d0c] border border-[#d97736]/30 px-3.5 py-1.5 rounded-full">
            Barber-Transformation
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Vorher / Nachher Umstyling-Vergleich
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 font-normal">
            Ziehen Sie den Schieberegler, um zu sehen, wie ein frischer Cut & geschärfte Konturen den gesamten Look verändern.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d97736]/30">
          
          {/* After Image (Right Side) */}
          <img
            src={gallery1}
            alt="Nachher: Perfekter Skin Fade"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-[#d97736] text-stone-950 font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md z-10 uppercase tracking-wider">
            NACHHER: Frischer Cut
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={studioImg}
              alt="Vorher: Rausgewachsene Haare"
              className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-stone-900 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md z-10 uppercase tracking-wider border border-stone-700">
              VORHER: Rausgewachsen
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
          />
        </div>

      </div>
    </section>
  );
}
