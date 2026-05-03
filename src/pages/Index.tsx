import { useState } from "react";
import { OpeningScene } from "@/components/OpeningScene";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Confetti } from "@/components/Confetti";
import { BirthdayCake } from "@/components/BirthdayCake";

import { LoveLetter } from "@/components/LoveLetter";
import { ClickBurst } from "@/components/ClickBurst";
import { Countdown } from "@/components/Countdown";
import { FoodFeast } from "@/components/FoodFeast";
import { Heart, Sparkles, Gift } from "lucide-react";

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [wishMade, setWishMade] = useState(false);

  const triggerConfetti = () => setConfettiKey((k) => k + 1);

  return (
    <div className="relative min-h-screen bg-sky-romance overflow-hidden">
      {!opened && <OpeningScene onEnter={() => { setOpened(true); triggerConfetti(); }} />}

      <FloatingHearts />
      <ClickBurst />
      <Confetti trigger={confettiKey} count={140} />

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
          <div className="animate-pop-in max-w-6xl">
            <p className="font-script text-2xl md:text-3xl text-primary mb-3">
              <Sparkles className="inline w-6 h-6 mr-2" />
              Today is all about you
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-gradient mb-4 leading-tight font-extrabold">
              Happy Birthday
            </h1>
            <p className="font-script text-4xl md:text-6xl lg:text-7xl text-primary mb-4">
              My Love
            </p>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/80 italic mb-6 max-w-3xl mx-auto">
              My longest childhood friend & my best friend 🤧😝
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart
                  key={i}
                  className="w-7 h-7 text-primary fill-primary animate-heartbeat"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <button
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-10 py-5 bg-romance text-white rounded-full font-extrabold text-lg shadow-glow hover:scale-110 transition-transform"
            >
              <Gift className="w-5 h-5" />
              Throw some confetti!
            </button>
          </div>

          <div className="mt-16 animate-float-soft">
            <p className="text-sm text-muted-foreground font-bold">scroll for surprises ↓</p>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 px-6">
          <Countdown />
        </section>

        {/* Love Letter */}
        <section className="py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-2 font-extrabold">A Letter For You</h2>
            <p className="font-script text-2xl text-primary/80">straight from my heart</p>
          </div>
          <LoveLetter onSurprise={triggerConfetti} />
        </section>

        {/* Cake */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blush/40 to-transparent">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-2 font-extrabold">Make A Wish</h2>
            <p className="font-script text-2xl text-primary/80">
              {wishMade ? "Your wish is on its way ✨" : "Blow out the candles, my love"}
            </p>
          </div>
          <BirthdayCake onAllBlown={() => { setWishMade(true); triggerConfetti(); }} />
        </section>

        {/* Food Feast */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-accent/10 to-transparent">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-2 font-extrabold">A Feast For You 🍽️</h2>
            <p className="font-script text-2xl text-primary/80">all your favorites, in one place</p>
          </div>
          <FoodFeast onSurprise={triggerConfetti} />
        </section>

        {/* Gallery — Her Memories */}
        <section className="py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-2 font-extrabold">Her Memories</h2>
            <p className="font-script text-2xl text-primary/80">photos & videos of you being amazing</p>
          </div>
          <PhotoGallery onSurprise={triggerConfetti} />
        </section>

        {/* Final */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-20 h-20 mx-auto text-primary fill-primary animate-heartbeat mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-4 font-extrabold">
              I love you, always
            </h2>
            <p className="font-script text-3xl text-primary mb-8">
              Here's to you, today and forever
            </p>
            <button
              onClick={triggerConfetti}
              className="px-12 py-5 bg-romance text-white rounded-full font-extrabold text-xl shadow-glow hover:scale-110 transition-transform animate-glow-pulse"
            >
              One more celebration 🎉
            </button>
            <p className="mt-12 text-sm text-muted-foreground font-bold">
              Made with 💖 just for you
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
