import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function contact() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7f9] px-4 font-sans">
       <button
         onClick={() => navigate(-1)}
       className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition"
     >
         ← Back
    </button>

      <div className="w-full max-w-[480px] bg-white p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-200 blur-xl opacity-50 rounded-full" />
            <img
              src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
              alt="Slack"
              className="relative w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Text Header */}
        <h1 className="text-[32px] leading-tight font-black text-gray-900 mb-3 tracking-tight">
          Join the <span className="text-[#4A154B]">Ryze AI</span> <br />
          Slack Community
        </h1>

        <p className="text-gray-500 text-base mb-10">
          Connect with 5,000+ AI growth engineers.
        </p>

        {/* Social Auth Buttons */}
        <div className="space-y-3 mb-8">
          <button className="w-full flex items-center justify-center gap-3 border-[1.5px] border-gray-200 rounded-xl py-3 text-sm font-bold text-gray-700 hover:bg-blue-500 hover:border-gray-300 transition-all active:scale-[0.98]">
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border-[1.5px] border-gray-200 rounded-xl py-3 text-sm font-bold text-gray-700 hover:bg-blue-500 hover:border-gray-300 transition-all active:scale-[0.98]">
            <FaApple className="text-xl pb-1" />
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gray-200" />
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        {/* Custom Email Input Group */}
        <div className="space-y-4">
          <div className="group flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4A154B] transition-all bg-gray-50 focus-within:bg-white">
            <input
              type="text"
              placeholder="name"
              className="flex-1 px-4 py-3.5 text-gray-900 bg-transparent outline-none font-medium placeholder:text-gray-400"
            />
            <span className="bg-gray-200/50 px-4 py-3.5 text-gray-500 font-semibold text-sm border-l border-gray-200">
              @try-ryze.ai
            </span>
          </div>

          <button className="w-full bg-[#4A154B] hover:bg-[#360e38] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/10 transition-all active:scale-[0.97]">
            Continue
          </button>
        </div>

        {/* Admin Note Section */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-left">
          <div className="flex gap-3">
            <div className="mt-1">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Don't have an{" "}
              <span className="text-gray-800 font-bold">@try-ryze.ai</span>{" "}
              email? Reach out to your Workspace Admin or request an invitation
              <span className="text-[#4A154B] font-bold cursor-pointer hover:underline ml-1">
                here
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}









