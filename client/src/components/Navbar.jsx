import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change background from transparent to glass
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${
        scrolled
          ? "py-3 bg-black/60 backdrop-blur-md border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            R
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-all">
            Ryze AI
          </h1>
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Testimonials", "Pricing"].map(
            (item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors"
                >
                  {item}
                </a>
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </li>
            )
          )}
        </ul>

        {/* CTA SECTION */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Log in
          </button>
          <button className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="relative z-10">Get Started</span>
            {/* Hover Shine Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}