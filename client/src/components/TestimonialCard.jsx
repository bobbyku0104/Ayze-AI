

import React from "react";

export default function TestimonialCard({ initials, name, role, text }) {
  return (
    <div className="group relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-indigo-500/30">
      {/* Decorative Gradient Glow (Visible on Hover) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* User Profile */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            {initials}
          </div>
          <div>
            <p className="font-bold text-white tracking-tight">{name}</p>
            <p className="text-xs uppercase tracking-widest text-indigo-400 font-medium">
              {role}
            </p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 text-yellow-500 mb-4 text-sm">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-300 leading-relaxed italic">
          &ldquo;{text}&rdquo;
        </p>
      </div>
    </div>
  );
}