import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700"
          />
        </div>
        <div className="space-y-1">
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700"
          />
        </div>
      </div>

      <div className="space-y-1">
        <input
          type="text"
          placeholder="Company Website"
          className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700"
        />
      </div>

      <div className="space-y-1">
        <textarea
          rows={2}
          placeholder="Briefly describe your goals..."
          className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700 resize-none"
        />
      </div>

      <div className="pt-4">
        <button
          disabled={loading}
          className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-xs hover:bg-indigo-500 hover:text-white transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit Inquiry"}
          {!loading && (
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
