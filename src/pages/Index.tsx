import { useState } from "react";
import { OpeningScene } from "@/components/OpeningScene";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Confetti } from "@/components/Confetti";
import { BirthdayCake } from "@/components/BirthdayCake";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LoveLetter } from "@/components/LoveLetter";
import { ClickBurst } from "@/components/ClickBurst";
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
      <Confetti trigger={confettiKey} count={120} />

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
          <div className="animate-pop-in">
            <p className="font-script text-2xl md:text-3xl text-primary mb-3">
              <Sparkles className="inline w-6 h-6 mr-2" />
              Today is all about you
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-gradient mb-4 leading-tight">
              Happy Birthday
            </h1>
            <p className="font-script text-5xl md:text-7xl text-primary mb-6">
              Claudia, my love
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-primary fill-primary animate-heartbeat"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <button
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-8 py-4 bg-romance text-white rounded-full font-semibold shadow-glow hover:scale-110 transition-transform"
            >
              <Gift className="w-5 h-5" />
              Throw some confetti!
            </button>
          </div>

          <div className="mt-16 animate-float-soft">
            <p className="text-sm text-muted-foreground">scroll for surprises ↓</p>
          </div>
        </section>

        {/* Love Letter */}
        <section className="py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-2">A Letter For You</h2>
            <p className="font-script text-2xl text-primary/80">straight from my heart</p>
          </div>
          <LoveLetter onSurprise={triggerConfetti} />
        </section>

        {/* Cake */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blush/30 to-transparent">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-2">Make A Wish</h2>
            <p className="font-script text-2xl text-primary/80">
              {wishMade ? "Your wish is on its way ✨" : "Blow out the candles, my love"}
            </p>
          </div>
          <BirthdayCake onAllBlown={() => { setWishMade(true); triggerConfetti(); }} />
        </section>

        {/* Gallery */}
        <section className="py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-2">Our Memories</h2>
            <p className="font-script text-2xl text-primary/80">every moment with you is a gift</p>
          </div>
          <PhotoGallery onSurprise={triggerConfetti} />
        </section>

        {/* Final */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-20 h-20 mx-auto text-primary fill-primary animate-heartbeat mb-6" />
            <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-4">
              I love you, always
            </h2>
            <p className="font-script text-3xl text-primary mb-8">
              Here's to you, today and forever
            </p>
            <button
              onClick={triggerConfetti}
              className="px-10 py-4 bg-romance text-white rounded-full font-semibold text-lg shadow-glow hover:scale-110 transition-transform animate-glow-pulse"
            >
              One more celebration 🎉
            </button>
            <p className="mt-12 text-sm text-muted-foreground">
              Made with 💖 just for you
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
