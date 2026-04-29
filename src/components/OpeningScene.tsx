import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const NAME = "Claudia";

export const OpeningScene = ({ onEnter }: { onEnter: () => void }) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 200);
    const t2 = setTimeout(() => setShowButton(true), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-romance bg-shimmer animate-shimmer overflow-hidden">
      {/* Sparkle backdrop */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white/70 animate-float-soft"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 12 + Math.random() * 20,
              height: 12 + Math.random() * 20,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="font-script text-3xl md:text-5xl text-white/95 mb-6 animate-letter-rise" style={{ animationDelay: "0.2s" }}>
          Happy Birthday
        </p>

        {show && (
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] text-white drop-shadow-2xl flex justify-center flex-wrap">
            {NAME.split("").map((letter, i) => (
              <span
                key={i}
                className="animate-letter-rise inline-block"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
        )}

        <p className="font-script text-2xl md:text-4xl text-white/95 mt-4 animate-letter-rise" style={{ animationDelay: "1.8s" }}>
          My Love <Heart className="inline fill-white text-white animate-heartbeat" />
        </p>

        {showButton && (
          <button
            onClick={onEnter}
            className="mt-12 px-10 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-glow animate-pop-in hover:scale-110 transition-transform"
          >
            Open Your Surprise ✨
          </button>
        )}
      </div>
    </div>
  );
};
