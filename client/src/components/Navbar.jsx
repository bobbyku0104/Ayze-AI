import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/60 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white">
              R
            </div>
            <h1 className="text-2xl font-bold text-white">Ryze AI</h1>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {["features", "testimonials", "pricing"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-gray-400 hover:text-white transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-gray-300 hover:text-white"
            >
              Log in
            </Link>

            <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold">
              Get Started
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden pt-24 px-6"
          >
            <ul className="space-y-6 text-center">
              {["features", "testimonials", "pricing"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-lg font-semibold text-gray-300 hover:text-white"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}

              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li className="pt-4">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full py-3 rounded-xl bg-white text-black font-bold"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
