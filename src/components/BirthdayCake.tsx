import { useState } from "react";
import { Sparkles } from "lucide-react";

interface Props {
  onAllBlown: () => void;
}

export const BirthdayCake = ({ onAllBlown }: Props) => {
  const [candles, setCandles] = useState([true, true, true, true, true]);

  const blowCandle = (i: number) => {
    if (!candles[i]) return;
    const next = [...candles];
    next[i] = false;
    setCandles(next);
    if (next.every((c) => !c)) {
      setTimeout(onAllBlown, 400);
    }
  };

  const allOut = candles.every((c) => !c);

  return (
    <div className="flex flex-col items-center select-none">
      <p className="font-script text-2xl md:text-3xl text-primary mb-2">
        {allOut ? "Make a wish, my love ✨" : "Click the candles to blow them out!"}
      </p>
      <p className="text-sm text-muted-foreground mb-6">
        {candles.filter(Boolean).length} candle{candles.filter(Boolean).length !== 1 ? "s" : ""} left
      </p>

      <div className="relative" style={{ width: 320, height: 360 }}>
        {/* Glow when all blown */}
        {allOut && (
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
        )}

        {/* Candles */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex gap-3 items-end" style={{ height: 90 }}>
          {candles.map((lit, i) => (
            <button
              key={i}
              onClick={() => blowCandle(i)}
              className="relative flex flex-col items-center group cursor-pointer"
              style={{ width: 18 }}
              aria-label={`Candle ${i + 1}`}
            >
              {lit && (
                <>
                  <div className="absolute -top-2 w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-flame shadow-[0_0_20px_rgba(250,204,21,0.9)]" />
                  <div className="absolute -top-3 w-2 h-3 bg-yellow-100 rounded-full animate-flame opacity-80" style={{ animationDelay: "0.2s" }} />
                </>
              )}
              <div className="w-1 h-2 bg-gray-700 rounded-full mt-4" />
              <div
                className="w-3 rounded-sm shadow-md group-hover:scale-110 transition-transform"
                style={{
                  height: 60,
                  background: `linear-gradient(180deg, hsl(${i * 60} 80% 75%), hsl(${i * 60} 70% 60%))`,
                  backgroundImage: `repeating-linear-gradient(45deg, hsl(${i * 60} 80% 75%), hsl(${i * 60} 80% 75%) 4px, hsl(${i * 60} 70% 60%) 4px, hsl(${i * 60} 70% 60%) 8px)`,
                }}
              />
            </button>
          ))}
        </div>

        {/* Cake top tier */}
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-48 h-24 rounded-2xl shadow-card overflow-hidden bg-gradient-to-b from-pink-200 to-pink-300">
          <div className="absolute -top-2 left-0 right-0 h-6 bg-pink-100 rounded-b-[40%]" style={{
            backgroundImage: "radial-gradient(circle at 20% 100%, transparent 8px, #fce7f3 8px), radial-gradient(circle at 60% 100%, transparent 10px, #fce7f3 10px)",
          }} />
          <div className="absolute top-8 left-0 right-0 flex justify-around">
            {["🍓","🍒","🍓"].map((e,i) => <span key={i} className="text-xl">{e}</span>)}
          </div>
        </div>

        {/* Middle tier */}
        <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-64 h-20 rounded-2xl shadow-card bg-gradient-to-b from-purple-200 via-pink-200 to-rose-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-white/70" style={{
            backgroundImage: "radial-gradient(circle at 15% 100%, transparent 6px, white 6px), radial-gradient(circle at 50% 100%, transparent 8px, white 8px), radial-gradient(circle at 85% 100%, transparent 6px, white 6px)",
          }} />
          <div className="absolute inset-x-0 bottom-2 text-center font-script text-primary text-xl">Claudia</div>
        </div>

        {/* Bottom tier */}
        <div className="absolute top-[260px] left-1/2 -translate-x-1/2 w-80 h-24 rounded-2xl shadow-soft bg-gradient-to-b from-rose-300 via-pink-400 to-rose-500 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-5 bg-pink-100" style={{
            backgroundImage: "radial-gradient(circle at 12% 100%, transparent 8px, #fce7f3 8px), radial-gradient(circle at 38% 100%, transparent 10px, #fce7f3 10px), radial-gradient(circle at 62% 100%, transparent 10px, #fce7f3 10px), radial-gradient(circle at 88% 100%, transparent 8px, #fce7f3 8px)",
          }} />
          <div className="absolute bottom-2 inset-x-0 flex justify-around">
            {Array.from({length: 6}).map((_,i) => (
              <Sparkles key={i} className="w-4 h-4 text-white/70" />
            ))}
          </div>
        </div>

        {/* Plate */}
        <div className="absolute top-[346px] left-1/2 -translate-x-1/2 w-96 h-4 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-lg" />
      </div>
    </div>
  );
};
