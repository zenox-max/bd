import { useState } from "react";

interface FoodItem {
  emoji: string;
  name: string;
  vibe: string;
  bg: string;
}

const FOODS: FoodItem[] = [
  { emoji: "🎂", name: "Birthday Cake", vibe: "the main event", bg: "from-pink-200 to-rose-300" },
  { emoji: "🍕", name: "Pizza Party", vibe: "always a yes", bg: "from-orange-200 to-red-300" },
  { emoji: "🍦", name: "Ice Cream", vibe: "double scoop", bg: "from-sky-200 to-pink-200" },
  { emoji: "🍔", name: "Juicy Burgers", vibe: "extra cheese", bg: "from-amber-200 to-orange-300" },
  { emoji: "🍣", name: "Sushi Date", vibe: "all the rolls", bg: "from-rose-200 to-fuchsia-300" },
  { emoji: "🌮", name: "Taco Tuesday", vibe: "any day really", bg: "from-yellow-200 to-amber-300" },
  { emoji: "🍩", name: "Donuts", vibe: "with sprinkles", bg: "from-pink-200 to-purple-200" },
  { emoji: "🍓", name: "Strawberries", vibe: "dipped in love", bg: "from-rose-200 to-pink-300" },
  { emoji: "🍫", name: "Chocolate", vibe: "as much as you want", bg: "from-amber-300 to-orange-400" },
  { emoji: "🥞", name: "Pancakes", vibe: "lazy mornings", bg: "from-yellow-200 to-orange-200" },
  { emoji: "🍝", name: "Pasta Night", vibe: "candlelit dinner", bg: "from-red-200 to-rose-300" },
  { emoji: "🧁", name: "Cupcakes", vibe: "tiny celebrations", bg: "from-fuchsia-200 to-pink-300" },
  { emoji: "🍰", name: "Slice of Heaven", vibe: "save me a piece", bg: "from-pink-300 to-rose-400" },
  { emoji: "🥐", name: "Croissants", vibe: "Paris someday", bg: "from-amber-200 to-yellow-300" },
  { emoji: "🍷", name: "Cheers!", vibe: "to us", bg: "from-purple-300 to-rose-400" },
  { emoji: "🍿", name: "Movie Night", vibe: "snuggled up", bg: "from-yellow-100 to-amber-200" },
];

export const FoodFeast = ({ onSurprise }: { onSurprise: () => void }) => {
  const [eaten, setEaten] = useState<Set<number>>(new Set());

  const eat = (i: number) => {
    setEaten((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    onSurprise();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {FOODS.map((f, i) => {
          const isEaten = eaten.has(i);
          return (
            <button
              key={i}
              onClick={() => eat(i)}
              className={`group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 hover:scale-110 bg-gradient-to-br ${f.bg} border-2 border-white/60`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                <div
                  className={`text-5xl md:text-6xl transition-all duration-500 ${
                    isEaten ? "scale-0 rotate-180 opacity-0" : "animate-bounce-soft group-hover:scale-125"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {f.emoji}
                </div>
                {isEaten && (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pop-in">
                    😋✨
                  </div>
                )}
                <div className="absolute bottom-1 left-0 right-0 px-1">
                  <p className="text-[10px] md:text-xs font-extrabold text-white drop-shadow-md leading-tight">
                    {f.name}
                  </p>
                  <p className="text-[8px] md:text-[10px] font-bold text-white/90 drop-shadow-md leading-tight">
                    {f.vibe}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-center mt-8 font-script text-2xl text-primary">
        Tap to nibble — we'll order all of these someday 🥰
      </p>
    </div>
  );
};
