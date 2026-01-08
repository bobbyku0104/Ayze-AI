import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatCard({ icon, title, value }) {
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hover) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const card = document.querySelector(".stat-card");
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [hover]);

  // Determine color based on value
  const getColorClass = () => {
    if (value.includes("+") || value.includes("x")) {
      return {
        gradient: "from-green-400 to-emerald-500",
        bg: "from-green-500/10 to-emerald-500/5",
        glow: "rgba(52, 211, 153, 0.3)",
        text: "text-green-400",
        progress: "bg-gradient-to-r from-green-500 to-emerald-500",
      };
    } else if (value.includes("-")) {
      return {
        gradient: "from-blue-400 to-cyan-500",
        bg: "from-blue-500/10 to-cyan-500/5",
        glow: "rgba(56, 189, 248, 0.3)",
        text: "text-blue-400",
        progress: "bg-gradient-to-r from-blue-500 to-cyan-500",
      };
    } else {
      return {
        gradient: "from-purple-400 to-pink-500",
        bg: "from-purple-500/10 to-pink-500/5",
        glow: "rgba(168, 85, 247, 0.3)",
        text: "text-purple-400",
        progress: "bg-gradient-to-r from-purple-500 to-pink-500",
      };
    }
  };

  const colors = getColorClass();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-56 p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-xl border border-gray-700/50 overflow-hidden group stat-card cursor-pointer"
      style={{
        boxShadow: hover
          ? `0 20px 40px rgba(0,0,0,0.3), 0 0 60px ${colors.glow}`
          : "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      {/* Interactive Light Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.glow}, transparent 40%)`,
        }}
      />

      {/* Animated Border Gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-gray-600/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Icon Container with Animation */}
        <motion.div
          animate={hover ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} mb-5 overflow-hidden`}
        >
          {/* Icon Shadow/Glow */}
          <div className="absolute inset-0 bg-white/20 blur-md" />

          {/* Icon */}
          <motion.span
            className="text-xl font-bold text-white relative z-10"
            animate={hover ? { scale: 1.2 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.span>

          {/* Pulsing Effect */}
          {hover && (
            <motion.div
              className="absolute inset-0 border-2 border-white/30 rounded-xl"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Title */}
        <motion.p
          animate={hover ? { x: 5 } : { x: 0 }}
          className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2"
        >
          {title}
        </motion.p>

        {/* Value with Counter Animation */}
        <motion.h3
          className={`text-2xl font-bold ${colors.text} mb-4`}
          animate={hover ? { scale: 1.05 } : { scale: 1 }}
        >
          {value}
          <motion.span
            animate={hover ? { opacity: 1 } : { opacity: 0.7 }}
            className="ml-2 text-sm font-normal text-gray-400"
          >
            {value.includes("ROAS")
              ? "Return"
              : value.includes("CPA")
              ? "Cost"
              : "Active"}
          </motion.span>
        </motion.h3>

        {/* Progress Bar with Animation */}
        <div className="relative h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${colors.progress}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
            }}
          />

          {/* Progress Glow */}
          <motion.div
            className="absolute inset-0 blur-sm"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`h-full ${colors.progress}`} />
          </motion.div>
        </div>

        {/* Additional Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className={`mt-4 px-3 py-1.5 rounded-full ${colors.bg} border border-gray-700/50 backdrop-blur-sm inline-flex items-center gap-2`}
        >
          <motion.div
            animate={hover ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
          />
          <span className="text-xs text-gray-300">
            {value.includes("24/7")
              ? "Real-time Monitoring"
              : "Performance Optimized"}
          </span>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-8 h-8">
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-500 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8">
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-transparent to-gray-500" />
      </div>

      {/* Floating Particles (on hover) */}
      {hover && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${colors.progress}`}
              initial={{
                x: Math.random() * 200,
                y: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                y: [null, -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}