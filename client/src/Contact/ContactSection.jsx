import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-[#030712] flex justify-center">
      {/* The Wrapper: Not full width */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
        {/* Animated Background Glows */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Left Side: Info (Small) */}
          <div className="p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-bold text-white mb-4">Ryze AI</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Optimization for the next generation of performance marketing.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-300">
                  Agents Online
                </span>
              </div>
              <p className="text-xs text-gray-500">support@ryzeai.com</p>
            </div>
          </div>

          {/* Right Side: Form (Compact) */}
          <div className="p-8 md:p-10 md:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Get in touch</h2>
              <p className="text-sm text-gray-500">
                We usually respond in under 2 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
