import { useState } from "https://esm.sh/react@18";
import { motion, AnimatePresence } from "https://esm.sh/framer-motion@11?external=react,react-dom";
import { Shuffle } from "https://esm.sh/lucide-react@0.468.0?external=react";

export default function SymbioticFortuneCards() {
  const fortunes = [
    "Your restaked assets will empower new ecosystems — trust in the flow.",
    "Shared security brings limitless opportunities — your path is abundant.",
    "Symbiotic weaves chains together — you are part of the greater whole.",
    "The fortune of tomorrow is built on the trust you place today.",
    "Restake wisely — each choice strengthens your legacy across networks.",
    "From liquidity springs resilience — your influence spans beyond one chain.",
    "Those who secure others secure themselves — your balance echoes across time.",
    "Your wallet is more than value — it is the seed of future worlds.",
    "A billion in TVL foretells a tide of prosperity.",
    "Symbiotic bonds never break — your fortune is interlinked.",
    "Where there is trust, there is growth — your assets nurture the future.",
    "The more chains you protect, the more doors open before you.",
    "Even in slashing, wisdom grows — resilience is your gift.",
    "Green energy flows through the network — your balance fuels it.",
    "The web of tomorrow remembers those who weave security today.",
    "Your name will echo in the blocks secured by your assets.",
    "Restaking turns risk into opportunity — fortune favors the bold.",
    "The future belongs to those who build across chains.",
    "Symbiosis is destiny — prosperity lies in collaboration.",
    "The chains of fate are secured by your choices."
  ];

  const [fortune, setFortune] = useState(null);
  const [shuffling, setShuffling] = useState(false);

  const drawFortune = () => {
    setShuffling(true);
    setTimeout(() => {
      const random = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(random);
      setShuffling(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center font-mono p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-green-950/50 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center mb-8">
        <img
          src="https://symbiotic.fi/logo.png"
          alt="Symbiotic Logo"
          className="w-20 h-20 mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        />
        <h1 className="text-4xl font-bold text-green-300 tracking-wide">
          Symbiotic Fortune Cards
        </h1>
      </div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95, rotate: 2 }}
        onClick={drawFortune}
        className="relative bg-green-900/20 border border-green-500 p-16 rounded-2xl cursor-pointer shadow-[0_0_35px_rgba(34,197,94,0.8)]"
      >
        <div className="absolute inset-0 -rotate-6 scale-105 rounded-2xl border border-green-700 bg-green-950/40" />
        <div className="absolute inset-0 rotate-6 scale-105 rounded-2xl border border-green-700 bg-green-950/40" />

        <Shuffle className="w-16 h-16 mx-auto text-green-400 animate-pulse relative z-10" />
        <p className="mt-4 text-center relative z-10">Click the pile to reveal your Symbiotic fortune</p>
      </motion.div>

      <div className="mt-12 h-32 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {shuffling ? (
            <motion.p
              key="shuffling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-300 text-lg italic animate-pulse"
            >
              Shuffling the chains of fate...
            </motion.p>
          ) : fortune ? (
            <motion.div
              key={fortune}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-green-800/30 border border-green-400 rounded-xl p-8 shadow-lg text-center max-w-xl"
            >
              <p className="text-2xl font-semibold text-green-200 leading-relaxed">
                {fortune}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}


