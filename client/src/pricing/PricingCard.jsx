import React from "react";

export default function PricingCard({
  title,
  price,
  subtitle,
  features,
  popular,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2
      ${
        popular
          ? "bg-gradient-to-b from-indigo-500/10 to-transparent border-indigo-500 shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)] scale-105 z-10"
          : "bg-white/[0.03] border-white/10 hover:border-white/20"
      } border`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-indigo-500/40">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-xl font-bold mb-2 ${
            popular ? "text-indigo-400" : "text-white"
          }`}
        >
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black tracking-tight">{price}</span>
          {subtitle && (
            <span className="text-gray-400 font-medium">{subtitle}</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <svg
              className={`w-5 h-5 shrink-0 ${
                popular ? "text-indigo-400" : "text-emerald-500"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${
          popular
            ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
        }`}
      >
        {price === "Custom" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
}