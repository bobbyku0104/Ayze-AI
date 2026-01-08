import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cards = [
    { icon: "G", title: "Google Ads", value: "+63% ROAS" },
    { icon: "M", title: "Meta Ads", value: "-45% CPA" },
    { icon: "C", title: "ChatGPT", value: "8.4x ROAS" },
    { icon: "A", title: "AI Analysis", value: "24/7 Active" },
  ];

  return (
    <section className="relative min-h-screen px-4 sm:px-6 bg-[#030303] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-[40%] sm:h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-[35%] sm:h-[35%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Next-Gen Ad Automation
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Let AI{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Manage Your Ads
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl"
          >
            Autonomous AI that scales Google, Meta, and ChatGPT campaigns 24/7
            with sub-second precision.
          </motion.p>

          {/* BUTTONS – MOBILE 2 ROWS */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
          >
            <button className="w-full px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-purple-500 transition active:scale-95">
              Start Free Trial
            </button>
            <button className="w-full px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/10 transition active:scale-95">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex gap-6 justify-center lg:justify-start text-xs sm:text-sm opacity-60"
          >
            <span className="font-bold tracking-widest">META PARTNER</span>
            <span className="font-bold tracking-widest">GOOGLE ELITE</span>
          </motion.div>
        </div>

        {/* RIGHT CONTENT – CARDS */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.4,
                },
              }}
              whileHover={{ y: -10 }}
              className={`${idx > 1 ? "hidden sm:block" : ""}`}
            >
              <StatCard {...card} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

